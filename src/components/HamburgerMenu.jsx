import { useState, React } from "react"
import Hamburger from "hamburger-react"
import Navbar from "./Navbar"

export default function HamburgerMenu() {
const [open, setOpen] = useState(false)

const toggleMenu = () =>{
  setOpen(!open)
}

return (
    <div className="lg:hidden text-white">
        <Hamburger className="" size={18} toggled={open} toggle={setOpen}/>

        {open && <div className="fixed left-0 top-0 w-full h-full bg-[#121212]/70 backdrop-blur-sm pt-4 ">
          <div className='flex justify-center w-full'>
                 <div className='w-11/12 flex flex-row justify-between'>
                {/* Logo*/}
                <a onClick={toggleMenu} href="#home" className='group flex flex-row items-center gap-2'>
                  <img src="icon.png" className='w-6 h-6 md:w-8 md:h-8'></img>
                <h1 className='group-hover:text-[#927ace] text-white text-lg md:text-2xl font-bold'>Jonathan Roach</h1>
                </a>

               {/* Hamburger Menu */}
               <Hamburger className="" size={18} toggled={open} toggle={setOpen}/>
                 </div>
               </div>
              
                  {/* Nav*/}
                    <div className="flex flex-col justify-between md:text-4xl text-white text-3xl font-[645] gap-5 ml-5 mt-6">
                        <a onClick={toggleMenu} href="#home">Home</a>
                        <a onClick={toggleMenu} href="#about">About</a>
                        <a onClick={toggleMenu} href="#experience">Experience</a>
                        <a onClick={toggleMenu}>Projects</a>
                        <a onClick={toggleMenu} href="#contact" >Contact Me</a>
                        
                    </div>
                
        </div>}
    </div>
  )
}