import { BsChevronRight } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import NavElement from "./NavElement";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { navElements } from "../../../constants/navElement";
import { TbLogout } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/auth/auth-slice";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const dispatch = useDispatch();

  const sidebarHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (window.innerWidth < 550) setIsOpen(false);
  }, [window.innerWidth]);

  return (
    <div
      className={`bg-slate-100 min-h-screen h-screen flex flex-col justify-between fixed py-4 transition-all shadow-md  ${
        isOpen ? "w-80 px-4" : "w-16 px-1"
      }`}
    >
      {/*============= LOGO & CHEVRON ICON ================ */}
      <div className="flex items-center justify-between mb-12">
        <h3 className="w-full flex items-center justify-center gap-4 text-xl font-bold">
          <FaShippingFast className="text-main w-8 h-8" />
          {isOpen && "Shippium"}
        </h3>
        <BsChevronRight
          onClick={sidebarHandler}
          className={`w-6 h-6 p-1 bg-dark text-white rounded-full flex items-center justify-center  hover:cursor-pointer shadow-md ${
            isOpen ? "" : "rotate-180 absolute -right-3"
          }`}
        />
      </div>

      {/*============= NAV ELEMENTS ================ */}
      <div className="flex-grow">
        {navElements.map((navElement, index) => (
          <NavElement
            key={index}
            isOpen={isOpen}
            name={navElement.name}
            route={navElement.route}
            icon={navElement.icon}
          />
        ))}
      </div>

      <div
        role="button"
        onClick={() => dispatch(logout())}
        className={`flex gap-4 group items-center my-2 group-hover:cursor-pointer hover:bg-dark hover:text-main  rounded-md 
                    ${isOpen ? "p-4 px-8" : "justify-center py-2"}`}
      >
        <TbLogout className="w-8 h-8 text-dark group-hover:text-main" />
        {isOpen && (
          <h3 className="text-dark font-bold group-hover:text-white ">
            Logout
          </h3>
        )}
      </div>
    </div>
  );
}
