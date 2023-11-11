import { useState } from "react";
import { Outlet } from "react-router-dom";
import Rightbar from "./Rightbar/Rightbar";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return (
        <div className="flex relative justify-start">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Rightbar />
            <div
                className={`ml-16 px-8 py-8 w-full ${
                    isOpen ? "sm:ml-80" : "sm:mt-16"
                }`}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
