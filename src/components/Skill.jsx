import React from 'react'

function Skill(props) {
  return (
    <div className='hover:scale-110 flex flex-col items-center p-2'>
        <img className="w-fit h-6 xl:h-8 mb-1" src={`skill-icons/${props.name.toLowerCase()}.png`}/>
        <p className='text-xs lg:text-sm font-semibold text-gray-300'>{props.name}</p>
    </div>
  )
}

export default Skill