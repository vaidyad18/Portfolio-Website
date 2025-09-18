import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FloatStyles = () => (
  <style>{`
    @keyframes skill-float {
      0% { transform: translateY(0); }
      100% { transform: translateY(-8px); }
    }
    .hover-float:hover {
      animation: skill-float 500ms ease-in-out infinite alternate;
    }
  `}</style>
);

const SkillItem = ({ src, label, imgClass = "" }) => (
  <div className="group flex flex-col items-center">
    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center overflow-hidden rounded-md">
      <img
        className={`w-24 object-contain transition-transform duration-300 hover:scale-105 hover-float ${imgClass}`}
        src={src}
        alt={label}
        loading="lazy"
      />
    </div>
    <p className="mt-2 border px-5 py-1 rounded-lg text-xs sm:text-sm text-white/90 opacity-0 -translate-y-1 transition-all duration-1000 group-hover:opacity-100 group-hover:translate-y-0">
      {label}
    </p>
  </div>
);


const Section = ({ titleLines, children }) => (
  <div
    data-aos="fade-up"
    className="flex flex-col gap-10 md:grid md:grid-cols-[14rem_1fr] md:items-center md:gap-16"
  >
    {/* Title */}
    <div className="font-poppins text-center md:text-left font-bold text-3xl xs:text-4xl xl:text-5xl">
      {titleLines.map((t, i) => (
        <p key={i}>{t}</p>
      ))}
    </div>

    <div className="w-full min-w-0">
      {children}
    </div>
  </div>
);


const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  return (
    <section id="skills" className="bg-black text-white">
      <FloatStyles />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="relative flex items-center justify-center mb-16">
          <div className="h-px w-full bg-white/20" />
          <span className="absolute bg-black px-4 text-2xl sm:text-3xl font-bold tracking-wider">
            SKILLS
          </span>
        </div>

        <div className="space-y-20">
          <Section titleLines={["PROGRAMMING", "LANGUAGES"]}>
            <div className="grid grid-cols-3 sm:grid-cols-4 ml-40 md:grid-cols-5 gap-10 place-items-center">
              <SkillItem
                label="JavaScript"
                src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
              />
              <SkillItem
                label="C++"
                src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
              />
              <SkillItem
                label="SQL"
                src="https://codevisionz.com/wp-content/uploads/2024/04/sql-logo.png"
              />
            </div>
          </Section>

          <Section titleLines={["FRAMEWORKS", "& LIBRARIES"]}>
            <div className="grid grid-cols-3 ml-40 sm:grid-cols-4 md:grid-cols-5 gap-10 place-items-center">
              <SkillItem
                label="React.js"
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              />
              <SkillItem
                label="Node.js"
                src="https://images.icon-icons.com/2699/PNG/512/nodejs_logo_icon_169910.png"
              />
              <SkillItem
                label="Express.js"
                src="https://img.icons8.com/color/512/express-js.png"
                imgClass="invert brightness-0"
              />
              <SkillItem
                label="Socket.io"
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg"
              />
              <SkillItem
                label="Tailwind CSS"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              />
            </div>
          </Section>

          <Section titleLines={["DATABASES"]}>
            <div className="grid grid-cols-3 ml-40 sm:grid-cols-4 md:grid-cols-5 gap-10 place-items-center">
              <SkillItem
                label="MongoDB"
                src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-svg-download-png-2945120.png?f=webp"
              />
              <SkillItem
                label="MySQL"
                src="https://cdn.freebiesupply.com/logos/large/2x/mysql-6-logo-png-transparent.png"
              />
              <SkillItem
                label="PostgreSQL"
                src="https://www.postgresql.org/media/img/about/press/elephant.png"
              />
            </div>
          </Section>

          <Section titleLines={["TOOLS &", "SOFTWARE"]}>
            <div className="grid grid-cols-3 ml-40 sm:grid-cols-4 md:grid-cols-5 gap-10 place-items-center">
              <SkillItem
                label="VS Code"
                src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
              />
              <SkillItem
                label="Git"
                src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
              />
              <SkillItem
                label="GitHub"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                imgClass="invert"
              />
              <SkillItem
                label="Postman"
                src="https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-svg-download-png-2945092.png"
                
              />
            </div>
          </Section>
        </div>
      </div>
    </section>
  );
};

export default Skills;
