import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import pfp from "../assets/pfp.jpg";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function Home() {
  const [text] = useTypewriter({
    words: ["Web Developer", "Programmer", "Software Engineer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  useEffect(() => {
    AOS.init({duration:1200})
  
    
  })

  return (
    <div id="home" className="bg-black w-full py-20 pt-20 " >
      <div className="text-white flex-wrap flex items-center justify-between" data-aos="zoom-in">
        <div className="ml-5 flex flex-col " >
          <a
            className="mb-8 transition-transform transform hover:scale-125"
            href="https://www.linkedin.com/in/vaidyadandriyal/"
          >
            <img
              className="box-border w-10 invert"
              src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png"
              alt="LinkedIn"
            />
          </a>
          <a
            className="mb-8 transition-transform transform hover:scale-125"
            href="https://github.com/vaidyad18"
          >
            <img
              className="w-10 invert"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
            />
          </a>
          <a
            className="transition-transform transform hover:scale-125"
            href="https://leetcode.com/u/vaidyad18/"
          >
            <img
              className="w-9 ml-1 invert"
              src="https://static-00.iconduck.com/assets.00/leetcode-icon-1721x2048-ludgp8qf.png"
              alt="LeetCode"
            />
          </a>
        </div>

        <div className=" w-3/6 py-12">
          <div className="text-xl border-white border-[1.5px] rounded-lg bg-blue-900 font-semibold w-72 text-center py-1 mb-2 ">
            Welcome to my Portfolio
          </div>
          <div className="text-5xl font-bold w-full mt-4 mb-2">
            Hello, I'm Vaidya Dandriyal
          </div>
          <div className="text-5xl font-bold mb-7 text-blue-500">
            <span> {text}</span>
            <span>
              <Cursor cursorStyle="|" cursorColor="red" />
            </span>
          </div>
          <div className="w-5/6 text-lg text-gray-300">
            A Computer Science student and Full-Stack Developer skilled in C++
            and data structures, is passionate about innovative, efficient
            problem-solving in tech.
          </div>
          <a href="./src/assets/Resume.pdf" download="Vaidya Dandriyal Resume"><button className="bg-blue-800 hover:bg-blue-950 font-semibold duration-300 transition-all font-sans px-6 py-2 text-lg mt-7 rounded-md">
            Download Resume <i className="fa-solid fa-download pl-1"></i>
          </button></a>
          <div className=""></div>
        </div>

        <div className="mr-32">
          <img
            className="w-[25rem] rounded-full  transition-transform transform hover:scale-105"
            src={pfp}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
