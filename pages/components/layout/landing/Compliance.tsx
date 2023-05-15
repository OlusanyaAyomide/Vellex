import React from 'react'
import VelImage from '../utils/VelImage'
import { ResourceExporter } from '@/public/exporter'
import { complainceText, comptext } from '@/utils/constants'
import {FaAngleDoubleRight} from "react-icons/fa"

export default function Compliance() {
  return (
    <div className='cont flex bg-white flex-wrap -mt-2 py-16 '>
      <div className='lg:hidden w-full '>
        <div className='w-full h-[300px] sm:h-[350px] object-cover  mx-auto'>
          <VelImage src={ResourceExporter.Wall}/>
        </div>
      </div>
      <div className='mt-8 lg:mt-0 lg:pr-2 w-full md:w-6/12'>
        <div className='w-fit'>
          <span className="w-fit text-[12px] bg-velt-offwhite mx-auto px-3 py-[2px] text-velt-pink">RETAINER</span>
          <h1 className='mt-2 section-header w-fit text-center'>Compliance Service</h1>
        </div>
          <h1 className='text-sm sm:text-[16px] sm:leading-[22px] mt-2'>{complainceText}</h1>
          <div className='flex flex-wrap pt-6'>
          {comptext.map((item,key)=>{
          return(
           <div key={key} className='mb-6 w-full lg:w-6/12  font-extrabold  text-base md:text-lg sm:flex items-center'>
            <span className='block text-xl md:inline text-velt-blue'>
              <FaAngleDoubleRight/>
            </span>
            <span className='md:ml-2'>{item}</span>
           </div>
            )
          })}
      </div>
      </div>
      <div className='hidden lg:block w-full lg:w-6/12'>
        <div className='w-full  h-[350px] object-cover'>
          <VelImage src={ResourceExporter.Wall}/>
        </div>
      </div>
   
    </div>
  )
}
