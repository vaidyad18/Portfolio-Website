import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/project1.jpg";
import nexume from "../assets/nexume.jpg";
import dailynewz from "../assets/dailynewz.jpg";
import rbac from "../assets/rbac.jpg";
import tabulr from "../assets/tabulr.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import sortify from "../assets/sortify.jpg"

function Projects() {
  const allCards = [
    {
      id: 1,
      url: nexume,
      title: "Nexume - AI Resume Builder",
      info: "Nexume is an AI-powered resume builder crafted with ReactJS, ShadCN, Clerk, and Strapi for seamless user authentication and content management. It streamlines professional resume creation with intelligent templates and real-time editing.",
      skill: [
        {
          name:"ReactJs"
        },{
          name:"ShadCN"
        },{
          name:"Clerk"
        },{
          name:"Strapi"
        }
      ],
      link: "https://nexume-ai-resume-builder.vercel.app/",
    },
    {
      id: 2,
      url: sortify,
      title: "Sortify - A Sorting Visualizer",
      info: "Sortify is a React.js-based sorting visualizer that lets users explore algorithms like Bubble, Merge, Quick, Insertion Sort, etc through animated bars. It offers controls to adjust speed, array size, and algorithm selection, while also displaying each algorithm’s time and space complexity for better understanding.",
      skill: [
        {
          name:"ReactJs"
        },{
          name:"Tailwind CSS"
        }
      ],
      link: "https://sortify-rouge.vercel.app/"
    },
    {
      id: 3,
      url: tabulr,
      title: "Tabulr - Excel-like Grid Component",
      info: "Tabulr is a React-based Excel-like grid component that brings spreadsheet functionality to the web. It supports resizing rows and columns, adding new ones, editing cells, sorting selected ranges, and keyboard navigation. Designed for smooth interaction and flexibility, it's ideal for data-rich web applications.",
      skill: [
        {
          name:"ReactJs"
        }
      ],
      link: "https://tabulr.vercel.app/"
    },

    {
      id: 4,
      url: dailynewz,
      title: "Daily Newz",
      info: "DailyNewz is a modern news web app built with React and Tailwind CSS, leveraging the News API to deliver real-time headlines. It offers a clean, responsive interface for browsing the latest global news across various categories.",
      skill: [
        {
          name:"ReactJs"
        },{
          name:"Tailwind CSS"
        }
      ],
      link: "https://github.com/vaidyad18/Daily-Newz"
    },

    
    {
      id: 5,
      url: rbac,
      title: "RBAC System",
      info: "RBAC System is a role-based access control app built with ReactJS, Tailwind CSS, and LocalStorage for persistent state management. It enables efficient user and role management with secure, client-side access control.",
      skill: [
        {
          name:"ReactJs"
        },{
          name:"Tailwind CSS"
        }
      ],
      link: "https://rbac-seven-gamma.vercel.app/"
    },
    {
      id: 6,
      url: project1,
      title: "MovieAura - Movie Guide Platform",
      info: "MovieAura is a dynamic movie guiding platform built with JavaScript, offering users curated movie details, ratings, and etc. It provides an interactive experience for discovering and exploring films across genres.",
      skill: [
        {
          name:"HTML"
        },{
          name:"CSS"
        },{
          name:"JavaScript"
        }
      ],
      link: "https://movie-aura.vercel.app/"
    },
  ];

  const [visibleCount, setVisibleCount] = useState(2);
  const cardsToDisplay = allCards.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <div id="projects">
      <div className="flex items-center  justify-center">
        <div className="bg-gray-500 w-full h-[2px] text-white "></div>
        <p className="absolute text-white text-2xl text-center font-bold bg-black px-4 ">
          PROJECTS
        </p>
      </div>

      <div className="h-1/2 w-full bg-black pt-20 pb-10  ">
        <div className=" flex justify-center gap-x-32 gap-y-10 flex-wrap ">
          {cardsToDisplay.map((card) => (
            <div key={card.id} data-aos="fade-up">
              <ProjectCard
                url={card.url}
                title={card.title}
                info={card.info}
                skill={card.skill}
                link={card.link}
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
