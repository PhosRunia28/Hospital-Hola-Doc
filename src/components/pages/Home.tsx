import heroImg from "@/img/hero.png";
import { Bell, Calendar, Webcam } from "lucide-react";
import { Button } from "../ui/button";
import CardItem from "../ui/CardItem";
import QuoteBox from "../ui/QuoteBox";
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-6 overflow-hidden md:flex-row-reverse md:items-center">
        <div className="relative mx-auto w-full md:mx-0 md:flex-1 ">
          {/* image */}
          <div className="relative w-full">
            <img
              src={heroImg}
              alt="hero-image"
              className="mx-auto max-w-[18rem] bg-cover bg-center md:max-w-sm lg:max-w-lg"
            />
            {/* bg image */}
            <div className="absolute inset-y-0 left-1/2 -z-10 mx-auto w-full max-w-[18rem] -translate-x-1/2 -skew-x-6 bg-secondary md:max-w-sm lg:max-w-md"></div>
          </div>
          <QuoteBox />
        </div>
        {/* title and description */}
        <div className="flex flex-col gap-5 text-center font-DMSans md:flex-1 md:justify-center md:gap-7 md:text-left lg:gap-9">
          <h2 className="mx-auto w-full max-w-md text-3xl font-medium md:mx-0 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
            Get the healthcare you need, when you need it.
          </h2>
          <p className="mx-auto w-full max-w-sm text-sm md:mx-0 lg:text-base xl:text-lg">
            Manage all of your healthcare needs in one convenient place - from
            booking appointments to tracking your health history.
          </p>
          <Button
            className="mx-auto w-full max-w-fit px-6 md:mx-0"
            type="button"
            size="lg"
          >
            Book An Appointment
          </Button>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-8 bg-primary px-6 py-8 font-DMSans md:mt-0 lg:justify-normal lg:px-14">
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
      </div>
    </>
  );
}
