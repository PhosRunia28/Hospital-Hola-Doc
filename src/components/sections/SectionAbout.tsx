import aboutImg from "@/img/aboutImage.png";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function SectionAbout() {
  return (
    <section className="flex gap-6 py-5 font-DMSans lg:items-center lg:justify-center lg:py-0">
      <img
        src={aboutImg}
        alt="about Hola Doc Image"
        className="hidden bg-cover bg-center lg:block lg:max-w-lg xl:max-w-xl"
      />
      <div className="flex w-full flex-col gap-5 sm:gap-7 md:items-center md:justify-center md:text-center lg:items-start lg:justify-normal lg:pr-2 lg:text-left">
        <h3 className="w-full max-w-lg text-2xl font-bold sm:text-3xl lg:text-4xl">
          We Are <span className="text-primary">Hola Doc</span> A Healthcare
          Provider
        </h3>
        <p className="w-full max-w-lg leading-relaxed sm:max-w-xl">
          At Halo Doc, we believe in creating healthy, beautiful smiles that
          last a lifetime. Our team of experienced and compassionate dental
          professionals is dedicated to providing top-notch dental care in a
          warm and welcoming environment.
        </p>
        <div className="flex w-full flex-wrap items-center gap-5 md:justify-center lg:justify-normal">
          <Link to="/appointment">
            <Button
              className="mx-auto w-full max-w-fit px-6 md:mx-0"
              type="button"
              size="lg"
            >
              Book An Appointment
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              className="mx-auto w-full max-w-fit px-6 md:mx-0"
              variant="secondary"
              type="button"
              size="lg"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
