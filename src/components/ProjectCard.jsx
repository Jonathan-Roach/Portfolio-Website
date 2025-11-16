import ProjectTech from "./ProjectTech"
import { BsGithub} from "react-icons/bs";

function ProjectCard(props) {
   
    return (
        <div class={`w-full rounded-3xl shadow-lg bg-[#1e1e1e] border-4 border-[#292929] transform ${props.offset}`}>
            <img class="w-full rounded-t-3xl" src={props.image}/>
            <div class="px-6 py-4">
                <div className="flex flex-row items-center justify-between">
                    <div class="font-semibold text-gray-200 text-lg lg:text-xl">{props.title}</div>
                    <a href={props.github} target='_blank' className="text-gray-200 group">
                        <BsGithub className="group-hover:scale-110 group-hover:text-white" size={20} />
                    </a>
                </div>
                
                <p class="w-15/16 my-3 text-gray-300 text-[0.9rem] md:text-md">{props.description}</p>
                    <div className="flex flex-row items-center gap-3 mt-4 lg:mt-5">
                    {props.tech.map((item) => (
                        <ProjectTech name={item} />
                    ))}
                    </div>
                </div>
        </div>

    )
}

export default ProjectCard