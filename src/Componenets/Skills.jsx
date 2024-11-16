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
      { id: ".c2", endTranslateX: -200, rotate: -45 },
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
      x: () => `-${scrollWidth - viewportWidth }px`,
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
        <div className="text-center xl:ml-72 lg:ml-60 md:ml-52 ml-40 mr-96 " data-aos="zoom-out">
          <p className="xl:text-[20rem] lg:text-[16rem] md:text-[12rem] text-[9rem] text-white font-sans">SKILLS</p>
        </div>

        <div className="mr-96 ml-80 text-center pt-32" >
          <p className="xl:text-[18rem] lg:text-[17rem] md:text-[15rem] text-[12rem] text-white font-display">C++</p>
        </div>

        <div className="mr-96 text-center pt-32">
          <p className="xl:text-[18rem] lg:text-[17rem] md:text-[15rem] text-[12rem] text-white font-display">HTML</p>
        </div>

        <div className="mr-96 text-center pt-32">
          <p className="xl:text-[18rem] lg:text-[17rem] md:text-[15rem] text-[12rem] text-white font-display">CSS</p>
        </div>

        <div className="mr-96 text-center pt-32">
          <p className="xl:text-[18rem] lg:text-[17rem] md:text-[15rem] text-[12rem] text-white font-display">JavaScript</p>
        </div>

        <div className="mr-96 text-center pt-32">
          <p className="xl:text-[18rem] lg:text-[17rem] md:text-[15rem] text-[12rem] text-white font-display">React</p>
        </div>

        <div className="mr-96 text-center pt-32">
          <p className="xl:text-[18rem] lg:text-[17rem] md:text-[15rem] text-[12rem] text-white font-display">Tailwind CSS</p>
        </div>

        <div className="text-center pt-32">
          <p className="xl:text-[18rem] mr-40 lg:text-[17rem] md:text-[15rem] text-[12rem] text-white font-display">SQL</p>
        </div>

        <img
          className="c1 absolute w-24 bottom-[600px] left-[1500px] md:bottom-[630px] md:left-[1750px] lg:bottom-[630px] lg:left-[2050px] xl:bottom-[650px] xl:left-[2250px] 2xl:bottom-[370px] 2xl:left-[2250px] -rotate-12"
          src="https://avatars.githubusercontent.com/u/13841574?v=4"
          alt=""
        />
        <img
          className="c2 absolute w-24 bottom-[470px] left-[1230px] md:bottom-[480px] md:left-[1430px] lg:bottom-[480px] lg:left-[1730px] xl:bottom-[480px] xl:left-[1930px] 2xl:bottom-[210px] 2xl:left-[1930px] rotate-12"
          src="https://avatars.githubusercontent.com/u/13841574?v=4"
          alt=""
        />
        <img
          className="c3 absolute w-24 bottom-[460px] left-[1900px] md:bottom-[460px] md:left-[2170px] lg:bottom-[460px] lg:left-[2370px] xl:bottom-[460px] xl:left-[2720px] 2xl:bottom-[380px] 2xl:left-[2720px] -rotate-45"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1200px-HTML5_Badge.svg.png"
          alt=""
        />
        <img
          className="c4 absolute w-24 bottom-[620px] left-[2160px] md:bottom-[620px] md:left-[2400px] lg:bottom-[620px] lg:left-[2700px] xl:bottom-[620px] xl:left-[3040px] 2xl:bottom-[220px] 2xl:left-[3040px] rotate-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1200px-HTML5_Badge.svg.png"
          alt=""
        />
        <img
          className="absolute c5 w-24 bottom-[470px] left-[2370px] md:bottom-[470px] md:left-[2700px] lg:bottom-[470px] lg:left-[3070px] xl:bottom-[470px] xl:left-[3330px] 2xl:bottom-[350px] 2xl:left-[3330px] rotate-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1200px-HTML5_Badge.svg.png"
          alt=""
        />
        <img
          className="absolute c6 w-24 bottom-[480px] left-[2750px] md:bottom-[480px] md:left-[3100px] lg:bottom-[480px] lg:left-[3500px] xl:bottom-[480px] xl:left-[3820px] 2xl:bottom-[210px] 2xl:left-[3820px] rotate-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png"
          alt=""
        />
        <img
          className="absolute c7 w-24 bottom-[590px] left-[2980px] md:bottom-[590px] md:left-[3390px] lg:bottom-[590px] lg:left-[3820px] xl:bottom-[590px] xl:left-[4120px] 2xl:bottom-[380px] 2xl:left-[4120px] -rotate-45"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png"
          alt=""
        />
        <img
          className="absolute c8 bottom-[580px] left-[4140px] md:bottom-[620px] md:left-[4740px] lg:bottom-[620px] lg:left-[5340px] xl:bottom-[620px] xl:left-[5700px] w-32 2xl:bottom-[340px] 2xl:left-[5700px] rotate-12"
          src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
          alt=""
        />
        <img
          className="absolute c9 w-32 bottom-[450px] left-[4020px] md:bottom-[450px] md:left-[4660px] lg:bottom-[450px] lg:left-[5160px] xl:bottom-[450px] xl:left-[5390px] 2xl:bottom-[180px] 2xl:left-[5390px] -rotate-45"
          src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
          alt=""
        />
        <img
          className="absolute c10 w-32 bottom-[520px] left-[3720px] md:bottom-[520px] md:left-[4260px] lg:bottom-[520px] lg:left-[4760px] xl:bottom-[520px] xl:left-[4980px] 2xl:bottom-[270px] 2xl:left-[4980px] -rotate-12"
          src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
          alt=""
        />
        <img
          className="absolute c11 w-32 bottom-[590px] left-[3450px] md:bottom-[590px] md:left-[3950px] lg:bottom-[590px] lg:left-[4350px] xl:bottom-[590px] xl:left-[4590px] 2xl:bottom-[350px] 2xl:left-[4590px] rotate-12"
          src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
          alt=""
        />
        <img
          className="absolute c12 w-32 bottom-[610px] left-[4600px] md:bottom-[610px] md:left-[5250px] lg:bottom-[630px] lg:left-[5780px] xl:bottom-[640px] xl:left-[6170px] 2xl:bottom-[360px] 2xl:left-[6220px] -rotate-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          alt=""
        />
        <img
          className="absolute c13 w-32 bottom-[470px] left-[4750px] md:bottom-[470px] md:left-[5450px] lg:bottom-[470px] lg:left-[6000px] xl:bottom-[470px] xl:left-[6450px] 2xl:bottom-[210px] 2xl:left-[6510px] -rotate-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          alt=""
        />
        <img
          className="absolute c14 w-32 bottom-[590px] left-[5050px] md:bottom-[590px] md:left-[5750px] lg:bottom-[590px] lg:left-[6350px] xl:bottom-[590px] xl:left-[6800px] 2xl:bottom-[340px] 2xl:left-[6860px] -rotate-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          alt=""
        />
        <img
          className="absolute c15 w-32 bottom-[760px] left-[5500px] md:bottom-[790px] md:left-[6300px] lg:bottom-[790px] lg:left-[7000px] xl:bottom-[500px] xl:left-[7400px] 2xl:bottom-[230px] 2xl:left-[7400px] -rotate-45"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
          alt=""
        />
        <img
          className="absolute c16 w-32 bottom-[700px] left-[5800px] md:bottom-[700px] md:left-[6650px] lg:bottom-[700px] lg:left-[7350px] xl:bottom-[630px] xl:left-[7700px] 2xl:bottom-[390px] 2xl:left-[7700px] rotate-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
          alt=""
        />
        <img
          className="absolute c17 w-32 bottom-[640px] left-[6100px] md:bottom-[820px] md:left-[7000px] lg:bottom-[820px] lg:left-[7700px] xl:bottom-[610px] xl:left-[8400px] 2xl:bottom-[360px] 2xl:left-[8400px] "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
          alt=""
        />
        <img
          className="absolute c18 w-32 bottom-[430px] left-[5660px] md:bottom-[430px] md:left-[6500px] lg:bottom-[430px] lg:left-[7500px] xl:bottom-[470px] xl:left-[8000px] 2xl:bottom-[220px] 2xl:left-[8000px] -rotate-12 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
          alt=""
        />
        <img
          className="absolute c19 w-32 bottom-[350px] left-[5900px] md:bottom-[330px] md:left-[6800px] lg:bottom-[300px] lg:left-[7150px] xl:bottom-[470px] xl:left-[8750px] 2xl:bottom-[220px] 2xl:  rotate-12 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
          alt=""
        />
        <img
          className="absolute c20 w-32 bottom-[600px] left-[6500px] md:bottom-[600px] md:left-[7500px] lg:bottom-[600px] lg:left-[8200px] xl:bottom-[600px] xl:left-[9200px] 2xl:bottom-[360px] 2xl:left-[9200px] rotate-12 "
          src="https://img.icons8.com/plasticine/100/000000/oracle-pl-sql--v3.png"
          alt=""
        />
        <img
          className="absolute c21 w-32 bottom-[500px] left-[6840px] md:bottom-[500px] md:left-[7840px] lg:bottom-[500px] lg:left-[8600px] xl:bottom-[500px] xl:left-[9500px] 2xl:bottom-[240px] 2xl:left-[9500px] rotate-12 "
          src="https://img.icons8.com/plasticine/100/000000/oracle-pl-sql--v3.png"
          alt=""
        />
      </div>
    </div>
  );
  8;
};

export default Skills;
