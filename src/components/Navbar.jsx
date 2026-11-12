import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import { personalData } from "../constants/links"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

function Navbar() {

  return (
    <nav className="fixed bg-gradient-to-b from-[#121212] via-[#121212] to-transparent w-full top-0 left-0 pt-4 pb-16 z-10">
      <div className='flex justify-center w-full'>
        <div className='w-11/12 lg:w-19/24 flex flex-row justify-between lg:justify-center items-center'>

        <a href="#home" className='group flex lg:hidden flex-row items-center gap-2 ml-3 md:ml-6'>

        <h1 className=' text-gray-200 text-lg md:text-xl font-bold'>Jonathan Roach</h1>
        </a>

      {/* Right side Nav*/}
      <div className="w-10/12 hidden lg:flex text-white font-medium flex-row justify-between items-center py-1">

        <div className='flex flex-row gap-7.5'>
            <a href="#home" className='navlink '>Home</a>
            <a href="#about" className='navlink '>About</a>
            <a href="#experience" className='navlink '>Experience</a>
            <a href="#projects" className='navlink'>Projects</a>
            <a href="#contact" className='navlink'>Contact</a>
        </div>

          <div className="flex flex-row gap-4">
              <a href={personalData.linkedIn} target='_blank' className="rounded-xl transition-all ease-in-out duration-500 text-gray-300 group">
                <BsLinkedin className="group-hover:scale-110 group-hover:text-[#0A66C2]" size={20} />
              </a>
              <a href={personalData.github} target='_blank' className="rounded-xl transition-all ease-in-out duration-500 text-gray-300 group">
                  <BsGithub className="group-hover:scale-110 group-hover:text-[#e23d13]" size={20} />
            </a>
              <a href={`mailto:${personalData.email}`} target='_blank' className="rounded-xl transition-all ease-in-out duration-500 text-gray-300 group">
                <FaEnvelope className="group-hover:scale-110 group-hover:text-[#EAAB00]" size={20} />
              </a>
         </div>
      </div>

      {/* Hamburger Menu */}
      <HamburgerMenu/>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar