import { experienceData } from "../constants/experience";
import ExperienceCard from "./ExperienceCard";

function Experiences() {
    return (
        <div id="experience" className="w-auto min-h-screen flex flex-col items-center py-12 bg-transparent">
            <div className="md:w-8/12">
                <h1 className="text-3xl md:text-4xl font-bold my-8 text-gray-200">Work Experience</h1>
            </div>
            {experienceData.map((item) => (
                <ExperienceCard 
                    key={item.id}
                    company={item.company} 
                    title={item.title} 
                    duration={item.duration}
                    logo={item.logo}
                    location={item.location}
                    description={item.description}/>
            ))}
        </div>
    )
}


export default Experiences