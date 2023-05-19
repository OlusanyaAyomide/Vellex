import React from 'react'


interface CapaBility {
  features:string[]
}

export default function CapaBilityList({features}:CapaBility) {
  return (
    <div>
      <span className='block text-lg mb-3 md:text-[23px] text-white '>Capabilities</span>
      <div className='w-full flex flex-wrap'>
      {features.map((item,key)=>{
        return(
          <div className='w-full xs:w-6/12 flex py-2' key={key}>
            <div>
            <div className='bg-[#CCCCCC] rounded-sm h-[8px] mt-2 w-[10px] sm:w-[14px]'></div>
            </div>
            <span className="block ml-3 text-base text-white">{item}</span>
          </div>
        )
      })}
      </div>
    
    </div>
  )
}
