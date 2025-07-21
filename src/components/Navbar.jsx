import React from 'react'
import HamburgerMenu from './HamburgerMenu'

function Navbar() {

  return (
    <nav className="fixed bg-gradient-to-b from-[#121212] via-[#121212] to-transparent w-full top-0 left-0 pt-4 pb-15 z-10">
      <div className='flex justify-center w-full'>
        <div className='w-11/12 flex flex-row justify-between items-center'>

        {/* Logo*/}
        <a href="#home" className='group flex flex-row items-center gap-2'>
          <img src="icon.png" className='w-6 h-6 md:w-7 md:h-7'></img>
        <h1 className='group-hover:text-white text-white md:text-gray-300 text-lg md:text-xl font-bold'>Jonathan Roach</h1>
        </a>

      {/* Right side Nav*/}
      <div className="hidden lg:flex text-gray-300 text-base font-medium flex-row items-center gap-7">
          <a href="#home" className='hover:text-white'>Home</a>
          <a href="#about" className='hover:text-white'>About</a>
          <a href="#experience" className='hover:text-white'>Experience</a>
          <a className='hover:text-white'>Projects</a>
          <a href="#contact" className='hover:text-white'>Contact</a>
      </div>

      {/* Hamburger Menu */}
      <HamburgerMenu/>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar