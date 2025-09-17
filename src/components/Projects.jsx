import { projectData } from "../constants/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <div id="projects" className="flex flex-col items-center py-12 bg-transparent">
                    <div className="md:w-8/12">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-8 text-gray-200">Projects</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 w-10/12 md:w-8/12">
                    {projectData.map((item, index) => (
                        <ProjectCard 
                            key={item.id}
                            title={item.title} 
                            image={item.image}
                            tech={item.tech}
                            description={item.description}
                            github={item.github}
                            offset = {index % 2 === 1 ? "lg:translate-y-16" : ""}
                            />
                    ))}

                    </div>
                </div>
    )
}


export default Projects