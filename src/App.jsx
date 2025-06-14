import "./index.css";
import Navbar from "./Componenets/Navbar";
import Home from "./Componenets/Home";
import Skills from "./Componenets/Skills";
import Projects from "./Componenets/Projects";
import Contact from "./Componenets/Contact";
import Footer from "./Componenets/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 550);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative">
      <div className="selection:bg-white selection:text-black">
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <Link
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        to="home"
        className={` ${
          scrolled ? "block" : "hidden"
        } px-4 py-2 z-50 rounded-full bg-white fixed bottom-8 right-7 hover:bg-gray-400 duration-200 cursor-pointer`}
      >
        <i className="fa-solid text-3xl fa-arrow-up"></i>
      </Link>
    </div>
  );
}

export default App;
