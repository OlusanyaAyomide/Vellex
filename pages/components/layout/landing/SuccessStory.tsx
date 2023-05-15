import { BottomHistory, SuccessText, TopHistory, veltHostory } from '@/utils/constants'
import React from 'react'
import {FaAngleRight} from "react-icons/fa"
export default function SuccessStory() {
  return (
    <div className='mt-20 flex flex-wrap cont -16'>
      <div className='w-full lg:w-5/12 lg:pr-4 h-full  justify-between'>
        <div>
        <span className="block mb-1 w-fit text-sm text-velt-pink bg-white py-[2px]  pr-[8px] pl-1">Who We Are</span>
        <span className='block section-header'>{SuccessText}</span>
        </div>
        <h1 className='font-bold text-velt-pink mt-3 flex '>
            <span>Lets Talk</span>
            <span className='font-extrabold text-lg ml-8'><FaAngleRight/></span>
        </h1>
      </div>
      <div className='mt-6 w-full lg:w-7/12 md:pl-4'>
        <div>
          <h1 className='text-xl sm:text-2xl'>{veltHostory}</h1>
        </div>
        <div className='text-sm flex mt-6 flex-wrap sm:text-[16px] sm:leading-[22px]'>
          <h1 className='w-full  md:w-6/12 md:pr-4 '>{TopHistory}</h1>
          <h1 className='w-full  md:w-6/12 md:pl-4 mt-3 md:mt-0'>{BottomHistory}</h1>
        </div>
      </div>
    </div>
  )
}
