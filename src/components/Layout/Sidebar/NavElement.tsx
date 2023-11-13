import { NavLink, useLocation } from "react-router-dom";

interface NavProps {
  name: string;
  route: string;
  isOpen: boolean;
  icon: JSX.Element;
}

export default function NavElement({ name, icon, route, isOpen }: NavProps) {
  let location = useLocation();

  return (
    <NavLink to={route}>
      <div
        className={`flex gap-4 group items-center my-2 
                    ${
                      location.pathname === route
                        ? "bg-dark text-main"
                        : "text-gray-500"
                    } 
                    group-hover:cursor-pointer hover:bg-dark hover:text-main  rounded-md 
                    ${isOpen ? "p-4 px-8" : "justify-center py-2"}`}
      >
        {icon}
        {isOpen && (
          <h3
            className={`"text-gray-400 ${
              location.pathname === route ? "text-white" : "text-dark"
            } font-bold group-hover:text-white "`}
          >
            {name}
          </h3>
        )}
      </div>
    </NavLink>
  );
}
