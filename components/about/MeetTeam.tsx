import { TeamArray, TeamText } from '@/utils/constants'
import React from 'react'
import VelImage from '../layout/utils/VelImage'
import { BsArrowRight } from 'react-icons/bs'

export default function MeetTeam() {
  return (
    <div className='bg-white pt-24 -mt-2 flex flex-wrap cont'>
      <div className='w-full lg:w-3/12 mb-6'>
      <span className="w-fit text-[12px] bg-velt-offwhite mx-auto px-3 py-[2px] text-velt-pink mb-2">MEET OUR TEAM</span>
        <h1 className="text-xl font-semibold md:text-2xl lg:text-[22px] mb-3">A multi—disciplinary brilliant team</h1>
        <p className='text-sm sm:text-base'>{TeamText}</p>
      </div>
      <div className='w-full lg:w-9/12 sm:justify-center lg:justify-between flex flex-wrap pt-6 md:pt-0 relative pb-6'>
        {TeamArray.map((item,key)=>{
          return(
            <div key={key} className={`w-full ${key===1?"relative lg:left-6 xl:left-0":""} sm:max-w-[400px] lg:w-6/12 mb-16 md:my-20  ${key===0?"md:mt-32":key===2?"md:-mt-4":""} ${key%2===0?"lg:pl-4":"pr-4"} flex flex-wrap`}>
                <div className={`w-full h-[420px]  sm:max-w-[350px] mx-auto mb-4`}>
                  <VelImage src={item.image}/>
                </div>
                <div className='sm:px-6'>
                <h1 className="text-base font-semibold mb-2">{item.name}</h1>
                <p className='text-sm sm:text-base'>{item.text}</p>
                </div>
            </div>
          )
        })}
        <h1 className='absolute bottom-12 font-semibold items-center  left-8 text-base text-velt-pink flex'><span>learn more</span><span className='ml-6'><BsArrowRight/></span></h1>
      </div>
    </div>
  )
}
