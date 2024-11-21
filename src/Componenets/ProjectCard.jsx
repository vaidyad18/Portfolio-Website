import React from 'react'

function ProjectCard(props) {
  return (
    <div className='md:h-[340px] h-[190px] w-[320px] sm:h-[280px] sm:w-[500px] md:w-[600px] hover:scale-105 duration-500 rounded-3xl shadow-[40px_25px_50px_-15px_rgba(255,255,255,0.2)] border-white border-4 overflow-hidden relative group mb-12'>
      <img className='w-full h-full object-cover  ' src={props.url} alt="" />
      <div className=' flex items-center justify-around flex-col absolute -bottom-full right-0 group-hover:bottom-0 text-white w-full h-full bg-black backdrop-blur-sm bg-opacity-85 transition-all duration-700 '>
        <p className='font-bold text-lg sm:text-3xl  sm:mt-5 '>{props.title}</p>
        
        <p className='text-center text-[0.6rem] sm:text-lg text-gray-400 ml-7 mr-7'>{props.info}</p>
        <p className=' text-xs sm:text-lg bg-blue-900 py-1 px-3 sm:px-4 sm:py-2 rounded-full'>{props.skill}</p>
        <a href=""><button className='rounded-lg text-xs sm:text-md font-bold px-3 py-1 sm:px-6 sm:py-2 bg-green-700 mb-1 sm:mb-3'>Source Code</button></a>
      </div>
      
    </div>
  )
}

export default ProjectCard
