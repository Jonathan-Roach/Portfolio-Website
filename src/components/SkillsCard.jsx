import { Skills } from "../constants/skills"
import Skill from "./Skill"

function SkillsCard() {
    return(
         <div className='flex flex-col items-center md:items-start bg-[#1e1e1e] border-2 border-[#292929] w-full mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 px-2 md:px-8 py-6'>
                <h1 className="text-white text-lg md:text-xl font-semibold mb-2">Skills</h1>
                <div className="grid w-full items-center justify-center grid-cols-3 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6 gap-2">
                {Skills.map((item) => (
                <Skill name={item} />
            ))}
            </div>

            </div>
    )
}

export default SkillsCard