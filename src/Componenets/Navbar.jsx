import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Nav = () => {
  return (
    <>
      <Link
        className="hover:text-blue-500 cursor-pointer transition-all"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        to="home"
      >
        HOME
      </Link>

      <Link
        className="hover:text-blue-500 cursor-pointer transition-all"
        spy={true}
        smooth={true}
        offset={-10}
        duration={500}
        to="skills"
      >
        SKILLS
      </Link>

      <Link
        className="hover:text-blue-500 cursor-pointer transition-all"
        spy={true}
        smooth={true}
        offset={-120}
        duration={500}
        to="projects"
      >
        PROJECTS
      </Link>

      <Link
        className="hover:text-blue-500 cursor-pointer transition-all"
        spy={true}
        smooth={true}
        offset={-120}
        duration={500}
        to="contact"
      >
        CONTACT
      </Link>
    </>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full bg-black text-white h-20 flex items-center justify-between sticky top-0 z-50 ">
        <div className="text-white w-96 ml-1 sm:ml-20 hover:text-green-500 transition-all duration-500 text-3xl font-mono">
          <Link
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer "
            to="home"
          >
            Vaidya Dandriyal
          </Link>
        </div>

        <div className="lg:flex hidden mr-5 lg:ml-40 xl:ml-96 w-[600px] text-2xl justify-between font-sans font-semibold ">
          <Nav />
        </div>

        <div className="">
          <button onClick={ToggleNav} className="lg:hidden ml-5 mr-10 flex">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full bg-black transition-all text-white h-36 text-lg justify-around flex-col pb-3 pt-1 items-center">
          <Nav />
        </div>
      )}
    </>
  );
}

export default Navbar;
