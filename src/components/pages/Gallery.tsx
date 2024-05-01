import gallery1 from "@/img/gallery/gallery1.png";
import gallery2 from "@/img/gallery/gallery2.png";
import gallery3 from "@/img/gallery/gallery3.png";
import gallery4 from "@/img/gallery/gallery4.png";
import gallery5 from "@/img/gallery/gallery5.png";
import gallery6 from "@/img/gallery/gallery6.png";
import gallery7 from "@/img/gallery/gallery7.png";
import gallery8 from "@/img/gallery/gallery8.png";
import { Eye } from "lucide-react";
import SectionBreadcrumb from "../sections/SectionBreadcrumb";
import { useEffect } from "react";
export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on mount or route change
  }, []);
  const galleryHospital = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
  ];
  return (
    <>
      <SectionBreadcrumb breadcrumb="Gallery" />
      <section className="pb-28 pt-10 md:pt-14 lg:pt-28">
        <div className="flex flex-wrap justify-center gap-4">
          {galleryHospital.map((gallery, index) => {
            return (
              <div className="group relative">
                <img
                  key={index}
                  src={gallery}
                  alt={`gallery ${index}`}
                  className="h-[17rem] w-[17rem] bg-cover bg-center"
                />
                <div className="absolute inset-0 z-10 hidden cursor-pointer items-center  justify-center transition duration-300 group-hover:flex group-hover:bg-primary/50">
                  <Eye className="h-16 w-16 text-primary" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
