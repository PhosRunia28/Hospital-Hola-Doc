import service1 from "@/img/service1.png";
import service2 from "@/img/service2.png";
import { departements } from "../../data/departements";
import ServiceItem from "../ui/ServiceItem";

export default function SectionService() {
  return (
    <section className="flex flex-col gap-8 py-20 lg:flex-row">
        {/* service */}
        <div className="flex flex-col gap-8">
          <h3 className="text-3xl font-bold lg:text-4xl">
            Our Offered Services
          </h3>
          <p className="w-full max-w-lg text-black/70">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col gap-6 font-DMSans sm:flex-row">
            <ServiceItem
              image={service1}
              title="Cardiac Treatment"
              description="inappropriate behavior Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua."
            />
            <ServiceItem
              image={service2}
              title="Routine Checkup"
              description="inappropriate behavior Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua."
            />
          </div>
        </div>
        {/* departement */}
        <div className="flex w-full flex-col gap-8 bg-secondary px-6 py-12 text-center lg:max-w-lg">
          <h4 className="text-3xl font-medium">Departments</h4>
          <ul className="space-y-6">
            {departements.map((departement) => {
              return (
                <li key={departement.tag}>
                  <a href={departement.link} className="hover:text-white">
                    {departement.tag}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
  )
}
