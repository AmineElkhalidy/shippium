import { FiPackage } from "react-icons/fi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

interface NavElement {
  name: string;
  route: string;
  icon: JSX.Element;
}
export const navElements: NavElement[] = [
  {
    name: "Dashboard",
    icon: <MdOutlineSpaceDashboard className="w-8 h-8" />,
    route: "/",
  },
  {
    name: "Parcels",
    icon: <FiPackage className="w-8 h-8" />,
    route: "/parcels",
  },
  {
    name: "Packages",
    icon: <FiPackage className="w-8 h-8" />,
    route: "/packages",
  },
];
