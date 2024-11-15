import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css"

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);
  const scrollContentRef = useRef(null);

  useEffect(() => {
    AOS.init({duration:1200})
  
    
  })

  useEffect(() => {
    const cards = [
      { id: ".c1", endTranslateX: -200, rotate: 45 },
      { id: ".c2", endTranslateX: -180, rotate: -30 },
      { id: ".c3", endTranslateX: 200, rotate: 45 },
      { id: ".c4", endTranslateX: 100, rotate: 30 },
      { id: ".c5", endTranslateX: 60, rotate: -30 },
      { id: ".c6", endTranslateX: 70, rotate: -30 },
      { id: ".c7", endTranslateX: 90, rotate: 15 },
      { id: ".c8", endTranslateX: 70, rotate: -15 },
      { id: ".c9", endTranslateX: -70, rotate: -30 },
      { id: ".c10", endTranslateX: -60, rotate: -15 },
      { id: ".c11", endTranslateX: -20, rotate: 30 },
      { id: ".c12", endTranslateX: 50, rotate: -30 },
      { id: ".c13", endTranslateX: 100, rotate: 45 },
      { id: ".c14", endTranslateX: 40, rotate: 30 },
      { id: ".c15", endTranslateX: -10, rotate: -45 },
      { id: ".c16", endTranslateX: -10, rotate: -15 },
      { id: ".c17", endTranslateX: 10, rotate: 15 },
      { id: ".c18", endTranslateX: -10, rotate: -30 },
      { id: ".c19", endTranslateX: -10, rotate: 0 },
      { id: ".c20", endTranslateX: 10, rotate: -15 },
      { id: ".c21", endTranslateX: 10, rotate: 15 },
    ];

    cards.forEach((card) => {
      ScrollTrigger.create({
        trigger: card.id,
        start: "top top",
        end: "+=1200vh",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(card.id, {
            x: card.endTranslateX * self.progress,
            rotate: card.rotate * self.progress * 2,
            duration: 0.5,
            ease: "power3.out",
          });
        },
      });
    });

    // Cleanup ScrollTrigger instances on unmount
    return () => ScrollTrigger.getAll().forEach((instance) => instance.kill());
  }, []);

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    const endScrollDistance = scrollWidth / 2 - viewportWidth;

    gsap.to(scrollContentRef.current, {
      x: () => `-${scrollWidth - viewportWidth - 900}px`,
      ease: "none",
      duration: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${endScrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <div id="skills"
      className="bg-black w-full h-screen overflow-hidden text-white"
      ref={containerRef}
    >
      <div
        className="flex items-center w-[700vw] h-full"
        ref={scrollContentRef}
      >
        <div className="text-center ml-72 mr-96 " data-aos="zoom-out">
          <p className="text-[20rem] text-white font-sans">SKILLS</p>
        </div>

        <div className="mr-96 ml-80 text-center pt-32" >
          <p className="text-[18rem] text-white font-display">C++</p>
        </div>

        <div className="mr-96 text-center pt-32">
          <p className="text-[18rem] text-white font-display">HTML</p>
        </div>

        <div className="mr-96 text-center pt-32">
          <p className="text-[18rem] text-white font-display">CSS</p>
        </div>

        <div className="mr-96 text-center pt-32">
          <p className="text-[18rem] text-white font-display">JavaScript</p>
        </div>

        <div className="mr-96 text-center pt-32">
          <p className="text-[18rem] text-white font-display">React</p>
        </div>

        <div className="mr-96 text-center pt-32">
          <p className="text-[18rem] text-white font-display">Tailwind CSS</p>
        </div>

        <div className="text-center pt-32">
          <p className="text-[18rem] text-white font-display">SQL</p>
        </div>

        <img
          className="c1 absolute w-24 bottom-[370px] left-[2250px] -rotate-12"
          src="https://avatars.githubusercontent.com/u/13841574?v=4"
          alt=""
        />
        <img
          className="c2 absolute w-24 bottom-[210px] left-[1930px] rotate-12"
          src="https://avatars.githubusercontent.com/u/13841574?v=4"
          alt=""
        />
        <img
          className="c3 absolute w-24 bottom-[380px] left-[2720px] -rotate-45"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1200px-HTML5_Badge.svg.png"
          alt=""
        />
        <img
          className="c4 absolute w-24 bottom-[220px] left-[3040px] rotate-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1200px-HTML5_Badge.svg.png"
          alt=""
        />
        <img
          className="absolute c5 w-24 bottom-[350px] left-[3330px] rotate-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1200px-HTML5_Badge.svg.png"
          alt=""
        />
        <img
          className="absolute c6 w-24 bottom-[210px] left-[3820px] rotate-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png"
          alt=""
        />
        <img
          className="absolute c7 w-24 bottom-[380px] left-[4120px] -rotate-45"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png"
          alt=""
        />
        <img
          className="absolute c8 w-32 bottom-[340px] left-[5700px] rotate-12"
          src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
          alt=""
        />
        <img
          className="absolute c9 w-32 bottom-[180px] left-[5390px] -rotate-45"
          src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
          alt=""
        />
        <img
          className="absolute c10 w-32 bottom-[270px] left-[4980px] -rotate-12"
          src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
          alt=""
        />
        <img
          className="absolute c11 w-32 bottom-[350px] left-[4590px] rotate-12"
          src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
          alt=""
        />
        <img
          className="absolute c12 w-32 bottom-[360px] left-[6220px] -rotate-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          alt=""
        />
        <img
          className="absolute c13 w-32 bottom-[210px] left-[6510px] -rotate-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          alt=""
        />
        <img
          className="absolute c14 w-32 bottom-[340px] left-[6860px] -rotate-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          alt=""
        />
        <img
          className="absolute c15 w-32 bottom-[230px] left-[7400px] -rotate-45"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
          alt=""
        />
        <img
          className="absolute c16 w-32 bottom-[390px] left-[7700px] rotate-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
          alt=""
        />
        <img
          className="absolute c17 w-32 bottom-[360px] left-[8400px] "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
          alt=""
        />
        <img
          className="absolute c18 w-32 bottom-[220px] left-[8000px] -rotate-12 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
          alt=""
        />
        <img
          className="absolute c19 w-32 bottom-[220px] left-[8750px] rotate-12 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
          alt=""
        />
        <img
          className="absolute c20 w-32 bottom-[360px] left-[9200px] rotate-12 "
          src="https://img.icons8.com/plasticine/100/000000/oracle-pl-sql--v3.png"
          alt=""
        />
        <img
          className="absolute c21 w-32 bottom-[240px] left-[9500px] rotate-12 "
          src="https://img.icons8.com/plasticine/100/000000/oracle-pl-sql--v3.png"
          alt=""
        />
      </div>
    </div>
  );
  8;
};

export default Skills;
