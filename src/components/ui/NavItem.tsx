import cn from "classnames";
import { NavLink } from "react-router-dom";
type NavItemprops = {
  header: { name: string; link: string };
  small?: boolean;
};
export default function NavItem({ header, small = true }: NavItemprops) {
  return (
    <NavLink
      to={header.link}
      className={({ isActive }) => {
        return cn(`transition`, {
          "font-bold text-black": isActive,
          "text-gray-700 hover:text-black": !isActive,
          "text-lg": !small,
          "text-base": small,
        });
      }}
    >
      {header.name}
    </NavLink>
  );
}
