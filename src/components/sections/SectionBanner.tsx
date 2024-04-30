import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function SectionBanner() {
  return (
    <section className="mb-8 flex flex-col items-center gap-5 bg-primary px-3 py-16 text-center font-DMSans text-white">
      <h3 className="text-3xl font-bold lg:text-4xl">
        Your Health is Our Priority
      </h3>
      <p className="w-full max-w-md text-gray-200">
        We can manage your dream building A small river named Duden flows by
        their place
      </p>
      <Link to="/appointment">
        <Button
          className="mx-auto w-full max-w-fit px-6 md:mx-0"
          variant="white"
          type="button"
          size="lg"
        >
          Book An Appointment
        </Button>
      </Link>
    </section>
  );
}
