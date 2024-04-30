import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Logo from "../ui/Logo";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative flex flex-col justify-between gap-8 bg-[#222] px-5 pb-20 pt-10 font-SourceCodePro sm:px-14 lg:flex-row">
      <div className="flex flex-col gap-6 text-white">
        <h3 className="text-xl font-bold">Contact Us</h3>
        <p className="w-full text-gray-200 sm:max-w-xs">
          56/8, Santa bullevard, Rocky beach, San fransisco, Los angeles, USA
        </p>
        <h5 className="text-lg">012-6532-568-9746</h5>
        <h5 className="text-lg">012-6532-568-97468</h5>
        <Logo />
      </div>
      {/* opening hours */}
      <div className="flex flex-1 flex-col gap-5 text-white">
        <h3 className="text-xl font-bold">Opening Hours</h3>
        <div className="flex items-center justify-between gap-4">
          <p>Mon-Wed</p>
          <p>8.00-18.00</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>Thu-Fri</p>
          <p>8.00-17.00</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>Sat</p>
          <p>9.00-17.00</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>Sun</p>
          <p>10.00-17.00</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>Holiday</p>
          <p>Closed</p>
        </div>
      </div>
      {/* newsLetter */}
      <div className="flex flex-col text-white">
        <h3 className="mb-4 text-xl font-bold">Newsletter</h3>
        <p className="mb-6 w-full max-w-xs text-gray-200">
          You can trust us. we only send promo offers, not a single spam.
        </p>
        <form className="mb-7 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Email Address"
            name="email_newsletter"
            className="w-full max-w-sm rounded-full px-6 py-2 text-black"
          />
          <Button
            type="button"
            className="w-full max-w-fit rounded-full px-10 py-2"
          >
            Subcribe
          </Button>
        </form>
        <div className="flex gap-4">
          <Link to="/" className="group bg-black p-2 transition hover:bg-white">
            <Facebook className="h-4 w-4 text-gray-300 group-hover:text-black" />
          </Link>
          <Link to="/" className="group bg-black p-2 transition hover:bg-white">
            <Instagram className="h-4 w-4 text-gray-300 group-hover:text-black" />
          </Link>
          <Link to="/" className="group bg-black p-2 transition hover:bg-white">
            <Twitter className="h-4 w-4 text-gray-300 group-hover:text-black" />
          </Link>
        </div>
      </div>
      {/* copyright */}
      <div className="absolute bottom-4 left-1/2 w-full -translate-x-1/2 text-center text-white">
        <h5 className="text-sm font-medium">
          Copyright <span className="text-secondary">©{year}</span> All rights
          reserved | by{" "}
          <a
            href="https://github.com/PhosRunia28"
            className="text-secondary underline"
          >
            PhosRunia
          </a>
        </h5>
      </div>
    </footer>
  );
}
