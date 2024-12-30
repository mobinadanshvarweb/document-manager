import { NavLink } from "react-router";
import { SideLinkProps } from "../types/side-link-type";

const SideLink: React.FC<SideLinkProps> = ({ text, icon, href }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive ? "bg-custombg text-customtext" : ""
      }
    >
      <li
        className={`w-full flex items-center rounded gap-2 p-2 duration-500 text-customtext hover:bg-custombg 
          
           `}
      >
        <span className="flex items-center">{icon}</span>
        <span className="items-center flex">{text}</span>
      </li>
    </NavLink>
  );
};

export default SideLink;
