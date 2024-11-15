import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-scroll'

function Navbar() {

  
  

  return (
    <nav className='w-full bg-black text-white h-20 flex items-center justify-between sticky top-0 z-50 '>
        <div className="text-white ml-20 hover:text-green-500 transition-all duration-500 text-3xl font-mono">
            <Link spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer' to="home">Vaidya Dandriyal</Link>
        </div>
        <div className="flex mr-20 w-[600px] text-2xl justify-between font-sans font-semibold">
            <Link className='hover:text-blue-500 cursor-pointer transition-all' spy={true} smooth={true} offset={-100} duration={500} to="home">HOME</Link>

            <Link className='hover:text-blue-500 cursor-pointer transition-all' spy={true} smooth={true} offset={-10} duration={500} to="skills">SKILLS</Link>
            
            <Link className='hover:text-blue-500 cursor-pointer transition-all' spy={true} smooth={true} offset={-120} duration={500} to="projects">PROJECTS</Link>

            <Link className='hover:text-blue-500 cursor-pointer transition-all' spy={true} smooth={true} offset={-120} duration={500} to="contact">CONTACT</Link>
        </div>
    </nav>
  )
}

export default Navbar
