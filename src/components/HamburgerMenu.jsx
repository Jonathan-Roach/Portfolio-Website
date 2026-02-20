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

        {open && <div className="fixed left-0 top-0 w-full h-full bg-[#121212]/75 backdrop-blur-sm pt-4 ">
          <div className='flex justify-center w-full'>
                 <div className='w-11/12 flex flex-row justify-between'>
                {/* Logo*/}
                <a onClick={toggleMenu} href="#home" className='group flex flex-row items-center gap-2'>
                  <img src="icon.png" className='w-6 h-6 md:w-7 md:h-7'></img>
                <h1 className='text-gray-200 text-lg md:text-xl font-bold'>Jonathan Roach</h1>
                </a>

               {/* Hamburger Menu */}
               <Hamburger className="" size={18} toggled={open} toggle={setOpen}/>
                 </div>
               </div>
              
                  {/* Nav*/}
                  <div className="flex justify-center">
                    <div className="w-12/14 flex flex-col justify-between md:text-4xl text-white text-3xl font-[645] mt-6">
                        <a className="border-t-2 py-3 border-[#292929]" onClick={toggleMenu} href="#home">Home</a>
                        <a className="border-t-2 py-3  border-[#292929]" onClick={toggleMenu} href="#about">About</a>
                        <a className="border-t-2 py-3  border-[#292929]" onClick={toggleMenu} href="#experience">Work</a>
                        <a className="border-t-2 py-3  border-[#292929]" onClick={toggleMenu} href="#projects">Projects</a>
                        <a className="border-t-2 py-3  border-[#292929]" onClick={toggleMenu} href="#contact" >Contact</a>
                        
                    </div>
                  </div>
                
        </div>}
    </div>
  )
}