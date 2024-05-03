import amanda from "@/img/dev/amanda.jpg";
import hamzah from "@/img/dev/hamzah.jpg";
import rosyidah from "@/img/dev/rosyidah.jpg";
import tedy from "@/img/dev/tedy.jpg";
import zidan from "@/img/dev/zidan.jpg";
import Card from "../ui/Card";
export default function SectionDev() {
  return (
    <section className="flex flex-col gap-12 py-14 font-SourceCodePro">
      <div className="flex flex-col gap-8 text-center">
        <h3 className="text-4xl font-bold">Our Developer</h3>
        <p className="tracking-relaxed mx-auto w-full max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-wrap justify-center gap-8 font-DMSans">
          <Card
            image={tedy}
            name="Tedy Nugroho"
            specialist="FrontEnd Dev"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam soluta doloremque atque perspiciatis ea"
          />
          <Card
            image={zidan}
            name="Muhammad Zidan Mumtaz"
            specialist="BackEnd Dev"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis id aperiam quis!"
          />
          <Card
            image={rosyidah}
            name="Rosyidah Dwiyanti"
            specialist="UI / UX Designer"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorum blanditiis delectus nesciunt aut ipsam?"
          />
          <Card
            image={hamzah}
            name="Muhammad Hamzah Maulana"
            specialist="FrontEnd Dev"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi molestiae ipsum quaerat, in sunt officia doloremque."
          />
          <Card
            image={amanda}
            name="Amanda Dewi Puspita"
            specialist="UI / UX Designer"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni magnam, provident odit sit impedit corrupti dicta. Officia, aspernatur."
          />
        </div>
      </div>
    </section>
  );
}
