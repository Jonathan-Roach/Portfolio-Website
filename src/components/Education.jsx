import { educationData } from "../constants/education";
import EducationCard from "./EducationCard";

function Education() {
    return (
        <div id="education" className="flex flex-col items-center py-12 bg-transparent">
            <div className="md:w-8/12">
                <h1 className="text-3xl md:text-4xl font-bold my-8 text-gray-200">Education</h1>
            </div>
            {educationData.map((item) => (
                <EducationCard 
                    key={item.id}
                    school={item.school} 
                    degree={item.degree}
                    program={item.program} 
                    duration={item.duration}
                    logo={item.logo}
                    location={item.location}
                    description={item.description}/>
            ))}
        </div>
    )
}


export default Education