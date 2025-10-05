import StatusCard from "./StatusCard"
import SkillsCard from "./SkillsCard"
import { personalData } from "../constants/links"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import CertificationsCard from "./CertificationsCard";

function About (){
    return(
        <div id="about" className="flex flex-col items-center py-12 bg-transparent">
            <div className="md:w-8/12">
                <h1 className="text-3xl md:text-4xl font-bold my-8 text-gray-200">About Me</h1>
            </div>
            <div className="w-10/12 md:w-8/12 grid lg:grid-cols-2 gap-x-12">
           
           <div className="flex flex-col justify-center">
                <StatusCard/>
                <div className="hidden lg:flex flex-row gap-2 mb-4 lg:justify-start justify-center ">
                    <a href={personalData.linkedIn} target='_blank' className="bg-[#1e1e1e] border-2 border-[#292929]  rounded-xl transition-all ease-in-out duration-500 p-3  text-gray-300 group">
                    <BsLinkedin className="group-hover:scale-110 group-hover:text-[#d3aef6]" size={26} />
                    </a>
                    <a href={personalData.github} target='_blank' className="bg-[#1e1e1e] border-2 border-[#292929]  rounded-xl transition-all ease-in-out duration-500 p-3  text-gray-300 group">
                    <BsGithub className="group-hover:scale-110 group-hover:text-[#d3aef6]" size={26} />
                    </a>
                     <a href={`mailto:${personalData.email}`} target='_blank' className="bg-[#1e1e1e] border-2 border-[#292929] rounded-xl transition-all ease-in-out duration-500 p-3 text-gray-300 group">
                       <FaEnvelope className="group-hover:scale-110 group-hover:text-[#d3aef6]" size={26} />
                     </a>
                </div>
            </div>

            <div className="flex flex-col gap-y-2">
                <SkillsCard/>
                <CertificationsCard/>
            </div>



            </div>
        </div>
    )
}

export default About