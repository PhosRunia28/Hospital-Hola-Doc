import logoImg from "@/img/logo.svg";
import { NavLink } from "react-router-dom";
export default function logo() {
  return (
    <NavLink to="/" className="flex items-center gap-3">
      <img src={logoImg} alt="logo" className="bg-white bg-cover bg-center" />
      <h3 className="text-lg font-bold">HolaDoc</h3>
    </NavLink>
  );
}
