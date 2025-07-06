import React from 'react'

function Navbar() {

  return (
    <nav className="fixed bg-gradient-to-b from-[#121212] via-[#121212] to-transparent w-full top-0 left-0 pt-4 pb-15 z-10">
      <div className='flex justify-center w-full'>
        <div className='w-11/12 flex flex-row justify-between'>

        {/* Logo*/}
        <a href="#home" className='group flex flex-row items-center gap-3'>
          <img src="icon.png" className='w-6 h-6 md:w-8 md:h-8'></img>
        <h1 className='group-hover:text-[#927ace] text-white text-lg md:text-2xl font-bold'>Jonathan Roach</h1>
        </a>

      {/* Right side Nav*/}
      <div className="hidden lg:flex text-white text-base font-medium flex-row items-center gap-10">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a>Projects</a>
          <a href="#contact">Contact Me</a>
      </div>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar