import React from 'react'
import VelImage from '../layout/utils/VelImage'
import { ResourceExporter } from '@/public/exporter'
import { InvestText1, investItems, investText2 } from '@/utils/constants'

export default function CapitalInvestment() {
  return (
    <div className='-mt-2 bg-white py-16 flex flex-wrap lg:flex-nowrap cont'>
      <div className='mb-12 lg:mb-0   w-full lg:w-fit'>
        <div className='rounded-[6px] overflow-hidden mx-auto lg:mx-0 max-w-[450px] md:w-[400px] lg:ml-4 lg:mr-4 h-[250px]'>
          <VelImage src={ResourceExporter.Cap}/>
        </div>
      </div>
      <div className='text-sm sm:text-base w-full'>
        <span className="block mb-3">{InvestText1}</span>
        <span className="block mb-3">{investText2}</span>
        <ul className='mt-4 '>
          {investItems.map((item,key)=>{
            return(
              <li key={key} className='my-1'>{item}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
0