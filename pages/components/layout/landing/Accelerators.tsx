import { ProductConstants } from '@/utils/constants'
import React from 'react'
import VelImage from '../utils/VelImage'

export default function Accelerators() {
  return (
    <div className='bg-white cont mt-12 py-20'>
      <div className='mx-auto w-fit'>
      <span className="w-fit text-[12px] bg-velt-offwhite mx-auto px-3 py-[2px] text-velt-pink">ONE OFF SERVICE</span>
      <h1 className='mt-2 section-header w-fit text-center'>Accelerator Products</h1>
      </div>
      <div className='flex item flex-wrap gap-y-1'>
        {ProductConstants.map((item,key)=>{
          return(
            <div key={key} className={`flex pl-5 mt-6 md:mt-12  items-center w-full md:w-6/12 lg:w-4/12 ${key<2?"xl:w-4/12":"xl:w-3/12"}`}>
              <div>
                <div className='h-[45px] w-[45px] md:h-[70px] md:w-[70px]'>
                  <VelImage src={item.image}/>
                </div>
              </div>
              <h1 className='font-extrabold ml-3 text-base md:text-lg'>{item.text}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}
