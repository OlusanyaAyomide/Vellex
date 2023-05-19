import React from 'react'
import CapaBilityList from './CapaBilityList'
import { ComplianceText, ComplianceText1, ComplianceText2 } from '@/utils/constants'

export default function Compliance() {
  return (
    <div className='cont -my-2 bg-white py-8'>
      <div className='border-t py-24 flex flex-wrap'>
        <div className='lg:p-12 p-3 sm:p-6 bg-[rgb(54,59,58)] w-full lg:w-6/12'>
          <CapaBilityList features={ComplianceText}/>
        </div>
        <div  className='w-full lg:w-6/12 lg:pl-16'>
        <span className="w-fit text-[12px] bg-velt-offwhite mx-auto px-3 py-[2px] text-velt-pink">RETAINER</span>
        <h1 className="section-header mb-2 mt-3">Compliance Services</h1>
        <span className="block mb-2">{ComplianceText1}</span>
        <span className="text-lg sm:text-xl font-semibold block mt-4 mb-1">Skills & expertise</span>
        <span className='text-sm sm:text-base block'>{ComplianceText2}</span>
        </div>
      </div>
    </div>
  )
}
