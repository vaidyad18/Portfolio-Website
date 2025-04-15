import React, { useState,useEffect } from "react";
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
        offset={-90}
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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full ${
          scrolled ? "backdrop-blur-md bg-black/40 " : ""
        } bg-black text-white h-20 flex items-center justify-between sticky top-0 z-50 `}
      >
        <div className="text-white w-96 ml-1 sm:ml-20 hover:text-blue-500 transition-all duration-200 text-3xl font-mono">
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
      <div
        className={`fixed top-20 right-0 px-16 xsm:px-20 xs:px-32 h-screen bg-black text-white text-xl gap-6 font-semibold flex flex-col items-center pt-10 transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Nav />
      </div>
    </>
  );
}

export default Navbar;
