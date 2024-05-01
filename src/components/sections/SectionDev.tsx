import doctor1 from "@/img/doctor1.png";
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
            image={doctor1}
            name="Tedy Nugroho"
            specialist="FrontEnd Dev"
            desc="I am an ambitious workaholic, but apart from that, pretty simple
                person."
          />
          <Card
            image={doctor1}
            name="Zidan Mumtaz"
            specialist="BackEnd Dev"
            desc="I am an ambitious workaholic, but apart from that, pretty simple
                person."
          />
          <Card
            image={doctor1}
            name="Rosyidah Dwiyanti"
            specialist="UI / UX Designer"
            desc="I am an ambitious workaholic, but apart from that, pretty simple
                person."
          />
          <Card
            image={doctor1}
            name="Hamza Nurrazi"
            specialist="FrontEnd Dev"
            desc="I am an ambitious workaholic, but apart from that, pretty simple
                person."
          />
          <Card
            image={doctor1}
            name="Amanda"
            specialist="UI / UX Designer"
            desc="I am an ambitious workaholic, but apart from that, pretty simple
                person."
          />
        </div>
      </div>
    </section>
  );
}
