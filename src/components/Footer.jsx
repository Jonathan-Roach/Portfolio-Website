import React from 'react'
import { personalData } from "../constants/links"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-auto mt-8 flex flex-col items-center'>
        <div className='w-10/12 md:w-8/12 flex flex-col md:flex-row justify-between border-t-[0.5px] border-[#292929] py-12 gap-4'>
            <div className='flex flex-col gap-1 text-gray-300'>
                <h1 className='text-2xl font-semibold'>Jonathan Roach</h1>
                <p className="text-base font-medium">{personalData.email}</p>
                <div className="flex flex-row mb-4 justify-start gap-2">
                        <a href={personalData.linkedIn} target='_blank' className="rounded-xl transition-all ease-in-out duration-500 py-3 text-gray-300 group">
                            <BsLinkedin className="group-hover:scale-110 group-hover:text-[#d3aef6]" size={20} />
                            </a>
                        <a href={personalData.github} target='_blank' className="rounded-xl transition-all ease-in-out duration-500 py-3  text-gray-300 group">
                         <BsGithub className="group-hover:scale-110 group-hover:text-[#d3aef6]" size={20} />
                         </a>
                          <a href={`mailto:${personalData.email}`} target='_blank' className="rounded-xl transition-all ease-in-out duration-500 py-3 text-gray-300 group">
                                 <FaEnvelope className="group-hover:scale-110 group-hover:text-[#d3aef6]" size={20} />
                             </a>
                      </div>
            </div>

            {/* Pages */}
            <div className="flex flex-col">
                <h2 className='text-white font-semibold pb-3 text-base md:text-lg'>Navigation</h2>
                <div className='font-medium grid grid-cols-3 md:grid-cols-2 gap-2 md:gap-4 text-sm md:text-base'>
                <a href="#home" className='text-gray-300 hover:text-white'>Home</a>
                <a href="#about" className='text-gray-300 hover:text-white'>About</a>
                <a href="#experience" className='text-gray-300 hover:text-white'>Work</a>
                <a className='text-gray-300 hover:text-white'>Projects</a>
                <a href="#contact" className='text-gray-300 hover:text-white'>Contact</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer