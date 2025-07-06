function Certification(props) {
    return(
    <div className="transition hover:translate-x-3 flex flex-row items-center my-2">
        <h1 className="text-2xl mr-4">{props.icon}</h1>
        <div>
            <p className="text-[#d3aef6] font-semibold text-xs">{props.company}</p>
            <h2 className="text-gray-300 font-semibold text-sm md:text-base">{props.title}</h2>
        </div>
    </div>
)}

export default Certification