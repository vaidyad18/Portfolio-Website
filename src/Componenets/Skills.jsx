import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <div id="skills">
      <div className="bg-black w-full text-white">
        <div className="flex items-center  justify-center">
          <div className="bg-gray-500 w-full h-[2px] text-white "></div>
          <p className="absolute text-white text-2xl text-center font-bold bg-black px-4 ">
            SKILLS
          </p>
        </div>
        <div className="flex justify-center items-center" >
          <div className="flex-col text-center items-center py-20 justify-center">
          <div data-aos="fade-up" className="flex md:flex-row flex-col mb-16 items-center">
              <div className="font-bold flex flex-col xsm:flex-row md:flex-col md:gap-0 xsm:gap-3 text-center md:text-start font-poppins text-3xl xs:text-4xl xl:text-5xl">
                <p>TECHNICAL</p>
                <p>SKILLS</p>
              </div>
              <div className="flex flex-wrap xsm:px-0 px-6 items-center justify-center md:mt-0 mt-2 ml-0 md:ml-24 lg:ml-40 xl:ml-60 gap-x-6 xs:gap-10 lg:gap-12 xl:gap-16">
                <div className="mt-2 group flex-col items-center relative">
                  <img
                    className="lg:w-24 w-20 cursor-pointer hover:animate-float"
                    src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
                    alt=""
                  />
                  <p className="text-sm rounded-full py-[4px] px-3 border-[1px] border-white mt-2 transform -translate-y-4 opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    JavaScript
                  </p>
                </div>

                <div className="group flex-col items-center relative">
                  <img
                    className="lg:w-[70px] w-[55px] cursor-pointer hover:animate-float mt-4"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
                    alt=""
                  />
                  <p className="text-sm rounded-full py-[4px] px-3 border-[1px] border-white mt-3 transform -translate-y-4 opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    C++
                  </p>
                </div>
                <div className="group mt-1 flex-col items-center relative">
                  <img
                    className="lg:w-24 w-20 hover:animate-float cursor-pointer -mt-1"
                    src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
                    alt=""
                  />
                  <p className="text-sm rounded-full py-[4px] px-3 border-[1px] border-white mt-3 transform -translate-y-4 opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    HTML
                  </p>
                </div>
                <div className="group flex-col items-center relative">
                  <img
                    className="lg:w-[88px] w-[70px] hover:animate-float mt-3 cursor-pointer"
                    src="https://images.seeklogo.com/logo-png/42/2/css-3-logo-png_seeklogo-426083.png"
                    alt=""
                  />
                  <p className="text-sm rounded-full py-[4px] px-3 border-[1px] border-white mt-3 transform -translate-y-4 opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    CSS
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="flex md:flex-row flex-col items-center mb-16">
              <div className="font-bold flex  xsm:flex-row flex-col md:flex-col md:gap-0 xsm:gap-2 text-center md:text-start font-poppins text-3xl xs:text-4xl xl:text-5xl">
                <p>FRAMEWORKS</p>
                <p>& LIBRARIES</p>
              </div>
              <div className="flex xsm:px-0 px-6 items-center justify-center flex-wrap ml-10 md:ml-12 lg:ml-28 xl:ml-44 gap-5 xs:gap-10 mt-6 lg:mt-0 lg:gap-12 xl:gap-16">
                <div className="group flex-col items-center relative">
                  <img
                    className="lg:w-20 w-16 hover:animate-float cursor-pointer"
                    src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                    alt=""
                  />
                  <p className="text-sm rounded-full py-[4px] px-3 border-[1px] border-white mt-3 transform -translate-y-4 opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    ReactJs
                  </p>
                </div>
                <div className="group flex-col items-center ml-1 relative">
                  <img
                    className="lg:w-[75px] w-[60px] hover:animate-float cursor-pointer"
                    src="https://www.shadcn.io/logo.png"
                    alt=""
                  />
                  <p className="text-sm rounded-full py-[4px] px-3 border-[1px] border-white   mt-3 transform -translate-y-4 opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    ShadCN
                  </p>
                </div>
                <div className="group flex-col lg:-ml-0 ml-4 xsm:-ml-2 items-center relative">
                  <img
                    className="lg:w-[88px] w-[70px] hover:animate-float cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                    alt=""
                  />
                  <p className="text-sm rounded-full py-[4px] px-3 border-[1px] border-white mt-3 transform -translate-y-4 opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    Bootstrap
                  </p>
                </div>
                <div className="group flex-col lg:-ml-0 xsm:-ml-3 items-center relative">
                  <img
                    className="lg:w-24 w-20 mt-2 hover:animate-float cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
                    alt=""
                  />
                  <p className="text-sm rounded-full py-[4px] px-3 border-[1px] border-white mt-3 transform -translate-y-4 opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    Tailwind CSS
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="flex md:flex-row flex-col items-center">
              <div className="font-bold flex xsm:flex-row flex-col md:flex-col md:gap-0 xsm:gap-2 text-center md:text-start font-poppins text-3xl xs:text-4xl xl:text-5xl">
                <p>TOOLS &</p>
                <p>SOFTWARE</p>
              </div>  
              <div className="flex xsm:px-0 px-6 items-center justify-center flex-wrap md:mt-0 mt-6 md:ml-28 lg:ml-44 xl:ml-[260px] gap-5 xs:gap-10 lg:gap-12 xl:gap-16">
                <div className="group flex-col items-center relative">
                  <img
                    className="lg:w-[70px] w-[52px] hover:animate-float cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"
                    alt=""
                  />
                  <p className="text-sm rounded-full py-[4px] px-3 border-[1px] border-white mt-3 transform -translate-y-4 opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    VS Code
                  </p>
                </div>
                <div  className="group flex-col xsm:-ml-2 items-center relative lg:ml-1">
                  <img
                    className="lg:w-20 w-[62px] hover:animate-float cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"
                    alt=""
                  />
                  <p className="text-sm rounded-full py-[4px] px-3 border-[1px] border-white mt-3 transform -translate-y-4 opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    Git
                  </p>
                </div>
                <div  className="group flex-col lg:ml-0 ml-2 items-center relative ">
                  <img
                    className="lg:w-[75px] w-[55px] hover:animate-float cursor-pointer invert"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt=""
                  />
                  <p className="text-sm rounded-full py-[4px] px-3 border-[1px] border-white mt-3 transform -translate-y-4 opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    Github
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  8;
};

export default Skills;
