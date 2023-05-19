import { AcceleatorText2, AcceleatorText3, AccelerateTExt1, CapaBilityText } from '@/utils/constants'
import React from 'react'
import CapaBilityList from './CapaBilityList'

export default function AcceleratorService() {
  return (
    <div className='-my-2 bg-white py-16 cont'>
      <span className="w-fit text-[12px] bg-velt-offwhite mx-auto px-3 py-[2px] text-velt-pink">ONE OFF SERVICES</span>
      <div className='flex flex-wrap gap-y-12'>
        <div className='w-full lg:w-6/12 lg:pr-5' >
          <h1 className="section-header mb-6">Accelerator Products</h1>
          <span>{AccelerateTExt1}</span>
          <div className="flex mt-6 ">
            <div className='pr-2 sm:pr-5'>
              <span className="block text-base md:text-lg font-semibold">Market Entry</span>
              <span className="block text-sm sm:text-base">{AcceleatorText2}</span>
            </div>
            <div className='pr-2 sm:pl-5'>
              <span className="block text-base md:text-lg font-semibold">Market Entry</span>
              <span className="block text-sm sm:text-base">{AcceleatorText3}</span>
            </div>
          </div>
        </div>
          <div className='lg:p-12 p-3 sm:p-6 bg-[#363B3A] w-full lg:w-6/12'>
            <CapaBilityList features={CapaBilityText}/>
          </div>
      </div>
    </div>
  )
}
