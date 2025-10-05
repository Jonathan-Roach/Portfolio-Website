import { certificationData } from "../constants/certifications"
import Certification from "./Certification"

function CertificationsCard() {
    return(
         <div className='flex flex-col items-center md:items-start bg-[#1e1e1e] border-2 border-[#292929] w-full mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 px-6 md:px-8 py-6'>
                <h1 className="text-white text-lg font-semibold mb-1">Certifications</h1>
                <div className="flex flex-col w-full">
                {certificationData.map((item) => (
                <Certification
                    key={item.id}
                    company={item.company} 
                    icon={item.icon} 
                    title={item.title}/>
            ))}
            </div>

            </div>
    )
}

export default CertificationsCard