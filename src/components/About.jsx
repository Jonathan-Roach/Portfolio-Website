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
           
           <div className="flex flex-col">
                <StatusCard/>
                <CertificationsCard/>
                
            </div>

            <div className="flex flex-col justify-center">
                <SkillsCard/>

            </div>



            </div>
        </div>
    )
}

export default About