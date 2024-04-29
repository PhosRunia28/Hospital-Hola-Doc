import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { headerLinks } from "@/route";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { Button } from "./button";
export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto flex w-full max-w-6xl items-center justify-between gap-6 bg-white px-6 pt-4 font-SourceCodePro lg:px-0">
      <div className="flex items-center gap-14">
        <Logo />
        <div className="hidden gap-6 md:flex">
          {headerLinks.map((header, index) => {
            return <NavItem key={index} header={header} />;
          })}
        </div>
      </div>
      <Link to="/" className="hidden md:inline-block">
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="rounded-none border border-black px-6 text-base text-black hover:bg-primary hover:text-white"
        >
          Book Now
        </Button>
      </Link>
      <div className="md:hidden ">
        {/* <Menu /> */}
        <Sheet>
          <SheetTrigger>
            <Menu className="h-8 w-8" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="mt-10 space-y-8">
              <SheetTitle className="mx-auto">
                <Logo />
              </SheetTitle>
              <SheetDescription className="flex flex-col gap-8">
                {headerLinks.map((header, index) => {
                  return <NavItem key={index} header={header} small={false} />;
                })}
                <Link to="/">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="border border-primary px-8 text-base hover:bg-primary hover:text-white"
                  >
                    Book Now
                  </Button>
                </Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
