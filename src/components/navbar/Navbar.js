import React from "react";
import { FcSearch } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="flex justify-between items-center bg-slate-900 text-white px-5 py-1 sticky w-[100%] top-0">
        <div className="flex justify-center items-center gap-4 ">
          <div className="cursor-pointer hover:scale-105 ">
            <NavLink to="/">
              {" "}
              <figure>
                <img
                  src="/images/logosubspro.png"
                  className="w-[50px] h-[50px] "
                  alt="HQpencils"
                />
              </figure>
            </NavLink>
          </div>
          <div className="cursor-pointer border-b-2 border-transparent hover:border-blue-500 transitionduration-200 active:text-red-500 font-serif font-bold text-green-500">
            HQpencils
          </div>
        </div>
        <div className="md:flex justify-center items-center h-[100%]  hidden">
          <input
            type="text"
            placeholder="Search Art"
            className=" rounded-l-lg py-1 outline-none text-green-500 px-4"
          />
          <FcSearch className="bg-blue-500 h-[32px] w-[32px] rounded-r-lg px-1" />
        </div>
        <div className="flex justify-center items-center gap-6">
          <NavLink to="/">
            <div className="cursor-pointer  border-b-2 border-transparent hover:border-blue-500 transition duration-200 active:text-red-500 md:block hidden">
              Home
            </div>
          </NavLink>
          <div className="cursor-pointer  border-b-2 border-transparent hover:border-blue-500 transition duration-200 active:text-red-500  md:block hidden">
            Shop
          </div>
          <div className="cursor-pointer  border-b-2 border-transparent hover:border-blue-500 transition duration-200 active:text-red-500  md:block hidden">
            About
          </div>
          <div className="cursor-pointer  border-b-2 border-transparent hover:border-blue-500 transition duration-200 active:text-red-500  md:block hidden">
            LogIN
          </div>
          <div className="cursor-pointer  border-b-2 border-transparent hover:border-blue-500 transition duration-200 active:text-red-500  md:block hidden">
            CreateAccount
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
