import React, { useState,useEffect } from "react";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/project1.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg"; 
import AOS from "aos";
import "aos/dist/aos.css"

function Projects() {

  const allCards = [
    {
      id: 1,
      url:  project1 ,
      title: "MovieAura-Movie Guide Platform",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem quis ad necessitatibus ut nulla eos assumenda. Incidunt amet culpa quidem. Dolor perferendis quos nemo nulla, repellendus accusantium? Excepturi, veniam quo incidunt neque provident molestias.",
      skill: "JavaScript",
    },

    {
      id: 2,
      url:  project4 ,
      title: "Tic Toe Toe Game",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem quis ad necessitatibus ut nulla eos assumenda. Incidunt amet culpa quidem. Dolor perferendis quos nemo nulla, repellendus accusantium? Excepturi, veniam quo incidunt neque provident molestias.",
      skill: "JavaScript",
    },

    {
      id: 3,
      url:  project5 ,
      title: "Weather App",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem quis ad necessitatibus ut nulla eos assumenda. Incidunt amet culpa quidem. Dolor perferendis quos nemo nulla, repellendus accusantium? Excepturi, veniam quo incidunt neque provident molestias.",
      skill: "JavaScript",
    },
    {
      id: 4,
      url:  project6 ,
      title: "To Do List App",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem quis ad necessitatibus ut nulla eos assumenda. Incidunt amet culpa quidem. Dolor perferendis quos nemo nulla, repellendus accusantium? Excepturi, veniam quo incidunt neque provident molestias.",
      skill: "JavaScript",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(2);
  const cardsToDisplay = allCards.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  useEffect(() => {
    AOS.init({duration:1200})
  
    
  })
  

  return (
    <div id="projects">
      <div className="flex items-center  justify-center">
        <div className="bg-gray-500 w-full h-[2px] text-white "></div>
        <p className="absolute text-white text-2xl text-center font-bold bg-black px-4 ">
          PROJECTS
        </p>
      </div>

      <div className="h-1/2 w-full bg-black pt-20 pb-16 pl-5 pr-5 " >
        <div className=" flex justify-around flex-wrap " >
          {cardsToDisplay.map((card) => (
            <div key={card.id} data-aos="flip-left">
              <ProjectCard
                url={card.url}
                title={card.title}
                info={card.info}
                skill={card.skill}
                
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center  mb-10">
          {visibleCount < allCards.length && (
            <button
              onClick={handleLoadMore}
              className="rounded-lg bg-blue-600 py-2 px-8 text-xl hover:bg-blue-900 duration-300 text-white font-semibold  "
            >
              View More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
