import { personalData } from "../constants/links"
import { experienceData } from "../constants/experience"

function StatusCard() {
    return(
         <div className='flex flex-col bg-[#1e1e1e] border-2 border-[#292929] w-full mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 px-4 md:px-8 py-6'>
                <h1 className="text-white text-xs md:text-sm font-semibold mb-1">Currently</h1>
                <ul className="list-disc ml-4 marker:text-[#d3aef6] text-gray-300 text-sm md:text-base font-semibold">
                    <li className="my-2">{personalData.major} Student | {personalData.minor} @ {personalData.school}</li>
                    <li className="my-2">{experienceData[0].title} @ {experienceData[0].company}</li>
                    <li className="my-2">Seeking Winter 2026 and Fall 2026 Internships</li>
                </ul>

            </div>
    )
}

export default StatusCard