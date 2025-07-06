function ExperienceCard(props) {

    return (
            <div className='flex flex-col bg-[#1e1e1e] border-2 border-[#292929] w-10/12 md:w-8/12 mx-auto h-auto rounded-xl mb-4 px-2 md:px-4 lg:px-8 py-6'>
                <div className="flex justify-between">
                    <div className='w-full flex items-center'>
                        <div className='flex items-center px-2 md:px-6'>
                            <img className='w-12 md:w-16 bg-white rounded-full ring-3 ring-offset-2 ring-white mr-3 block' src={props.logo} alt={`${props.company} logo`} />
                            <div className='text-left ml-2 w-full'>
                                <h1 className='text-base leading-tight text-balance md:text-xl lg:text-xl font-semibold text-white'>{props.company}</h1>
                                <h2 className='text-xs md:text-sm lg:text-base text-[#d3aef6] font-semibold'>{props.title}</h2>
                                <p className="lg:hidden text-gray-300 md:text-sm text-xs font-semibold">{props.duration}</p>
                                <p className="text-gray-300 md:text-sm text-xs font-semibold">{props.description}</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="hidden lg:flex text-right text-nowrap  flex-col justify-center">
                        <h1 className='text-xs xl:text-sm leading-3 ease-in-out duration-1000 font-semibold text-gray-300'>{props.duration}</h1>
                        <h2 className='text-xs xl:text-sm mt-1 text-gray-300 ease-in-out duration-1000 font-semibold'>{props.location}</h2>
                    </div>
                </div>
            </div>
    )
}

export default ExperienceCard