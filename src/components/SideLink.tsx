import { Link } from "react-router";
import { SideLinkProps } from "../types/side-link-type";

const SideLink: React.FC<SideLinkProps> = ({ text, icon, href, isActive }) => {
  return (
    <Link to={href}>
      <li
        className={`w-full flex items-center rounded gap-2 p-2 duration-500 text-customtext hover:bg-custombg ${
          isActive ? "bg-custombg text-customtext" : ""
        }`}
      >
        <span className="flex items-center">{icon}</span>
        <span className="items-center flex">{text}</span>
      </li>
    </Link>
  );
};

export default SideLink;
