import { Outlet } from "react-router-dom";
import NavBar from "../ui/NavBar";
import Footer from "./Footer";
export default function RouteConfig() {
  return (
    <div className="relative mx-auto my-6 w-full max-w-6xl px-6 pt-16 font-SourceCodePro lg:px-0">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
