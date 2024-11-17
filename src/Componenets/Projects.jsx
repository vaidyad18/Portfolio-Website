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
      info: "A dynamic movie guide project built with JavaScript, leveraging the OMDB API to fetch and display movie details such as plot, ratings, cast, and more. The user-friendly interface allows seamless search and exploration of a vast collection of films, enhancing the movie discovery experience.",
      skill: "JavaScript",
    },

    {
      id: 2,
      url:  project4 ,
      title: "Tic Toe Toe Game",
      info: "A classic Tic Tac Toe game for two players, built using JavaScript. Features an interactive interface, real-time gameplay, and logic to detect winners or ties, providing a fun and engaging experience.",
      skill: "JavaScript",
    },

    {
      id: 3,
      url:  project5 ,
      title: "Weather App",
      info: "A responsive weather app built using JavaScript, utilizing a weather API to provide real-time updates on current conditions, forecasts, and temperatures for any location. Simple, fast, and user-friendly.",
      skill: "JavaScript",
    },
    {
      id: 4,
      url:  project6 ,
      title: "To Do List App",
      info: "A sleek and interactive to-do list website built with JavaScript, allowing users to easily add and manage tasks. Features include task prioritization, real-time updates, and a clean user interface to boost productivity.",
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

      <div className="h-1/2 w-full bg-black pt-20 pb-16 pl-5 pr-10 " >
        <div className=" flex justify-around gap-10 flex-wrap " >
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
              className="rounded-lg bg-blue-600 py-2  sm:px-8 px-5 text-md sm:text-lg md:text-xl hover:bg-blue-900 duration-300 text-white font-semibold  "
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
