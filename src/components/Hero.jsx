import { personalData } from "../constants/links"
import { experienceData } from "../constants/experience"
import { HiArrowCircleDown  } from "react-icons/hi";
import Navbar from "./Navbar";

function Hero() {
    return(
            <div id="home" className="hover:active w-auto h-screen bg-linear-to-br bg-gradient-to-b from-transparent via-transparent to-[#121212] flex flex-col items-center justify-center">
                <div class="absolute inset-0 -z-10 h-full w-full bg-[#121212] bg-[linear-gradient(to_right,#292929_1px,transparent_1px),linear-gradient(to_bottom,#292929_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
                <Navbar/>
                <div className="text-center flex w-10/12 h-8/12 flex-col items-center justify-center gap-3">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold">Hello, I'm <br/><span className="text-[#d3aef6]">Jonathan Roach</span></h1>
                        <p className="text-xs md:text-lg lg:text-xl text-gray-300 font-semibold">Undergraduate Student at the University of Waterloo</p>
                        
                </div>
                <a href="#about"><HiArrowCircleDown href="#about" className="text-white text-4xl md:text-5xl animate-bounce"/></a>
            </div>
    )

}

export default Hero