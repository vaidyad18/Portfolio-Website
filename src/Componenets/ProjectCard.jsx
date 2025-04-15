import React from "react";

function ProjectCard(props) {
  return (
    <div className="md:h-[270px] h-[190px] w-[320px] sm:h-[280px] sm:w-[500px] md:w-[520px] hover:scale-105 duration-200 rounded-2xl  border-white border-2  overflow-hidden relative group mb-12">
      <a target="_blank" href={props.link}>
        <img className="w-full h-full object-cover  " src={props.url} alt="" />

        <div className=" flex items-center justify-center  flex-col absolute -bottom-full right-0 group-hover:bottom-0 text-white w-full h-full bg-black backdrop-blur-sm bg-opacity-85 transition-all duration-500 ">
          <p className="font-bold text-lg sm:text-2xl  sm:mt-5 ">
            {props.title}
          </p>

          <p className="text-center text-[0.6rem] sm:text-[15px] mt-2 text-gray-400 ml-7 mr-7">
            {props.info}
          </p>
          <div className="flex justify-center items-center mt-6 gap-4">
            {props.skill.map((item, i) => (
              <p
                key={i}
                className="text-xs sm:text-sm border-[1px] bg-black font-semibold text-white py-1 px-3 rounded-md"
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
