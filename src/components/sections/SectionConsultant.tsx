import doctor1 from "@/img/doctor1.png";
import Card from "../ui/Card";

export default function SectionConsultant() {
  return (
    <section className="flex flex-col gap-12 py-14 font-SourceCodePro">
      <div className="flex flex-col gap-8 text-center">
        <h3 className="text-4xl font-bold">Our Consultants</h3>
        <p className="tracking-relaxed mx-auto w-full max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-wrap justify-center gap-6 font-DMSans lg:justify-between">
          <Card
            image={doctor1}
            name="Dr. Lloyd Wilson"
            specialist="NEUROLOGIST"
            desc="I am an ambitious workaholic, but apart from that, pretty simple
                person."
          />
          <Card
            image={doctor1}
            name="Dr. Rachel Parker"
            specialist="OPHTHALMOLOGIST"
            desc="I am an ambitious workaholic, but apart from that, pretty simple
                person."
          />
          <Card
            image={doctor1}
            name="Dr. Ian Smith"
            specialist="DENTIST"
            desc="I am an ambitious workaholic, but apart from that, pretty simple
                person."
          />
          <Card
            image={doctor1}
            name="Dr. Alicia Henderson"
            specialist="PEDIATRICIAN"
            desc="I am an ambitious workaholic, but apart from that, pretty simple
                person."
          />
        </div>
      </div>
    </section>
  );
}
