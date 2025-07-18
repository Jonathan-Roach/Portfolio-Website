import React from 'react'

function Skill(props) {
  return (
    <div className='hover:scale-105 flex flex-col items-center p-2'>
        <img className="h-6 xl:h-7 mb-1 object-cover" src={`skill-icons/${props.name.toLowerCase()}.png`}/>
        <p className='text-xs lg:text-[0.8rem] font-semibold text-gray-300'>{props.name}</p>
    </div>
  )
}

export default Skill