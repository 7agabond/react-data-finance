import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav((prevNav) => !prevNav);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-[#00df9a] hover:cursor-pointer">
          <a>Home</a>
        </li>
        <li className="p-4 hover:text-[#00df9a] hover:cursor-pointer">
          <a>Company</a>
        </li>
        <li className="p-4 hover:text-[#00df9a] hover:cursor-pointer">
          <a>Resources</a>
        </li>
        <li className="p-4 hover:text-[#00df9a] hover:cursor-pointer">
          <a>About</a>
        </li>
        <li className="p-4 hover:text-[#00df9a] hover:cursor-pointer">
          <a>Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden hover:cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] hover:cursor-pointer">
            <a>Home</a>
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] hover:cursor-pointer">
            <a>Company</a>
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] hover:cursor-pointer">
            <a>Resources</a>
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] hover:cursor-pointer">
            <a>About</a>
          </li>
          <li className="p-4 hover:text-[#00df9a] hover:cursor-pointer">
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
