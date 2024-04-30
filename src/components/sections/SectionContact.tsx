import { Button } from "../ui/button";
import ContactItem from "../ui/ContactItem";
import { Home, Mail, Phone } from "lucide-react";

export default function SectionContact() {
  return (
    <section className="flex flex-col gap-10 py-28 font-DMSans lg:flex-row lg:items-center">
        <div className="flex flex-col gap-7">
          <ContactItem
            title="Binghamton, New York"
            desc="4343 Hinkle Deegan Lake Road"
            icon={<Home className="h-6 w-6 text-primary" />}
          />
          <ContactItem
            title="00 (958) 9865 562"
            desc="Mon to Fri 9am to 6 pm"
            icon={<Phone className="h-6 w-6 text-primary" />}
          />
          <ContactItem
            title="support@colorlib.com"
            desc="Send us your query anytime!"
            icon={<Mail className="h-6 w-6 text-primary" />}
          />
        </div>
        <form className="flex flex-col gap-5 sm:flex-row lg:flex-1">
          <div className="flex flex-1 flex-col gap-7">
            <input
              type="text"
              className="w-full px-4 py-4 text-sm"
              placeholder="Enter your name"
              name="name"
            />
            <input
              type="email"
              className="w-full px-4 py-4 text-sm"
              placeholder="Enter Email Address"
              name="email"
              required
            />
            <input
              type="text"
              className="w-full px-4 py-4 text-sm"
              placeholder="Enter your Subject"
              name="subject"
            />
          </div>
          <div className="flex flex-1 flex-col items-end gap-4">
            <textarea
              name="message"
              placeholder="Enter your Message"
              className="w-full text-sm"
              cols={30}
              rows={10}
            ></textarea>
            <Button
              type="submit"
              size="lg"
              className="w-full max-w-fit justify-end px-8"
            >
              Send Message
            </Button>
          </div>
        </form>
      </section>
  )
}
