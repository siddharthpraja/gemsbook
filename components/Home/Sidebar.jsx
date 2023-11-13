import React from "react";
import { Phudu } from "next/font/google";
import { IoLogoFlickr } from "react-icons/io";
import Navbar from "./Navbar";
import Navdata from "../Client/Navdata";

const phudu = Phudu({ subsets: ["latin"], weight: "700" });

const Sidebar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 items-center lg:ml-6 lg:mt-4 ">
            <IoLogoFlickr className="text-2xl sm:text-3xl " />
            <div className={phudu.className}>
              <h1 className="text-2xl sm:text-3xl w-max space-x-4 ">
                GEMS MGMT
              </h1>
            </div>
          </div>
          <div className="lg:hidden">
            <Navbar />
          </div>
        </div>
        {/* Page content here */}
        <ul className="w-full h-[100vh] hidden bg-base-300 lg:block">
          <Navdata/>
        </ul>
      </div>
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
        {/* Sidebar content here */}
        <Navdata/>
      </ul>
      </div>
    </div>
  );
};

export default Sidebar;
