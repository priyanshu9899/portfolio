import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { GiNinjaHead } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi";
import { FaModx } from "react-icons/fa6";

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const toggleNavbar = () => {
    setShowMediaIcons(!showMediaIcons);
  };

  return (
    <div className='flex w-full h-[80px] relative items-center justify-between px-[3vw] border-b-[1px] border-zinc-700 bg-blend'>
      <div className='flex gap-[1vw] font-bold items-center'>
        <img className='h-[2.5vw] w-[2.5vw] max-xl:h-[8vw] max-xl:w-[8vw] hover:animate-spin ' src='/abstract.png' alt='Logo' />
        <h1 className='text-[2vw] heading-area max-xl:text-[7.5vw] tracking-tighter text-white'> <a href="/">Portfolio</a></h1>
      </div>
      <div className='flex gap-[3vw] text-[1.2vw] items-center'>
        <NavLink
          exact="true"
          to="/"
          className="text-zinc-200 text-sm hover:text-cyan-600 max-xl:hidden"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="text-zinc-200 text-sm hover:text-cyan-600 max-xl:hidden"
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className="text-zinc-200 text-sm hover:text-cyan-600 max-xl:hidden"
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="text-zinc-200 text-sm hover:text-cyan-600 max-xl:hidden"
        >
          Contact Me
        </NavLink>

        <button onClick={toggleNavbar} className="max-xl:block xl:hidden text-white">
          {showMediaIcons ? (
            <IoClose className='text-[2vw] font-bold max-xl:text-[7vw]' />
          ) : (
            <IoMenu className='text-[2vw] font-bold max-xl:text-[7vw]' />
          )}
        </button>
      </div>
      <div
        className={`fixed top-24 right-0 h-[calc(100%-6rem)] w-2/3 bg-zinc-900 z-10 text-center transform ${
          showMediaIcons ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out xl:hidden`}
      >
        <NavLink
          exact="true"
          to="/"
          className=" py-4 text-zinc-200 flex  items-center justify-center gap-2 hover:text-cyan-600"
          onClick={toggleNavbar}
        >
          <FaHome />Home
        </NavLink>
        <NavLink
          to="/about"
          className="py-4 text-zinc-200 flex  items-center justify-center gap-2 hover:text-cyan-600"
          onClick={toggleNavbar}
        >
          <GiNinjaHead/>About
        </NavLink>
        <NavLink
          to="/projects"
          className="py-4 text-zinc-200 flex  items-center justify-center gap-2  hover:text-cyan-600"
          onClick={toggleNavbar}
        >
          <GiMaterialsScience />Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="py-4 text-zinc-200 flex  items-center justify-center gap-2  hover:text-cyan-600"
          onClick={toggleNavbar}
        >
          <FaModx />Contact Me
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;




