import heroImg from "@/img/hero.png";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import QuoteBox from "../ui/QuoteBox";
export default function SectionHero() {
  return (
    <section className="flex flex-col gap-6 overflow-hidden md:flex-row-reverse md:items-center">
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
        <Link to="/appointment">
          <Button
            className="mx-auto w-full max-w-fit px-6 md:mx-0"
            type="button"
            size="lg"
          >
            Book An Appointment
          </Button>
        </Link>
      </div>
    </section>
  );
}
