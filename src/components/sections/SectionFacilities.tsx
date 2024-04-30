import { Cross, Heart, UsersRound } from "lucide-react";
import ServiceFacilities from "../ui/ServiceFacilities";

export default function SectionFacilities() {
  return (
    <section className="flex flex-col gap-12 py-14 font-SourceCodePro">
      <div className="flex flex-col text-center">
        <h3 className="mb-6 text-4xl font-bold">Our Latest Facilities</h3>
        <p className="tracking-relaxed mx-auto w-full max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-left lg:justify-between">
          <ServiceFacilities
            icon={
              <Heart className="h-8 w-8 text-primary transition group-hover:scale-110" />
            }
            title="24/7 Emergency"
            desc="inappropriate behavior is often laughed off as “boys will be
                boys,” women face higher conduct women face higher conduct."
          />
          <ServiceFacilities
            icon={
              <Cross className="h-8 w-8 text-primary transition group-hover:scale-110" />
            }
            title="Intensive Care"
            desc="inappropriate behavior is often laughed off as “boys will be
                boys,” women face higher conduct women face higher conduct."
          />
          <ServiceFacilities
            icon={
              <UsersRound className="h-8 w-8 text-primary transition group-hover:scale-110" />
            }
            title="Family Planning"
            desc="inappropriate behavior is often laughed off as “boys will be
                boys,” women face higher conduct women face higher conduct."
          />
        </div>
      </div>
    </section>
  );
}
