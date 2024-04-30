import { Bell, Calendar, Webcam } from "lucide-react";
import SectionBanner from "../sections/SectionBanner";
import SectionBlog from "../sections/SectionBlog";
import SectionConsultant from "../sections/SectionConsultant";
import SectionHero from "../sections/SectionHero";
import SectionService from "../sections/SectionService";
import CardItem from "../ui/CardItem";
export default function Home() {
  return (
    <>
      <SectionHero />
      <section className="mt-6 flex flex-wrap justify-center gap-8 bg-primary px-6 py-8 font-DMSans md:mt-0 lg:justify-normal lg:px-14">
        <CardItem
          icon={<Calendar className="h-10 w-10 text-gray-300" />}
          title="Online appointment scheduling"
          desc="Allows users to schedule appointments with their healthcare provider through the app."
        />
        <CardItem
          icon={<Bell className="h-10 w-10 text-gray-300" />}
          title="Medication reminders"
          desc="Allows users to schedule appointments with their healthcare provider through the app."
        />
        <CardItem
          icon={<Webcam className="h-10 w-10 text-gray-300" />}
          title="Virtual consultations"
          desc="Allows users to schedule appointments with their healthcare provider through the app."
        />
      </section>
      <SectionService />
      <SectionConsultant />
      <SectionBanner />
      <SectionBlog />
    </>
  );
}
