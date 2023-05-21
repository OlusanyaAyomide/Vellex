import { InnovationText01, InnovationText02, InnovotationItems } from '@/utils/constants'
import React from 'react'
import VelImage from '../layout/utils/VelImage'
import { ResourceExporter } from '@/public/exporter'
import { FaAngleDoubleRight } from 'react-icons/fa'

export default function InnovationBody() {
  return (
    <div className='bg-white -my-2 cont py-16'>
      <span className="block sm:text-base text-sm mb-4">{InnovationText01}</span>
      <span className='block sm:text-base text-sm mb-24'>{InnovationText02}</span>
      <div className='flex flex-wrap lg:flex-nowrap' >
        <div className='flex flex-wrap'>
          {InnovotationItems.map((item,key)=>{
            return(
              <div key={key} className={`w-full ${key%2===0?"md:pr-3":"md:pl-3"} md:w-6/12 mb-12`}>
                <div className='mb-4 flex flex-col sm:flex-row'>
                  <span className='text-xl mb-1 text-velt-blue'><FaAngleDoubleRight/></span>
                  <span className='sm:ml-4 font-semibold text-base'>{item.title}</span>
                </div>
                <span className="block text-sm sm:text-base">{item.content}</span>
              </div>
            )
          })}
        </div>
        <div className='w-full lg:w-fit lg:pl-8'>
          <div className='w-full rounded-[6px] overflow-hidden mx-auto max-w-[450px] lg:w-[400px]'>
            <VelImage src={ResourceExporter.Inno}/>
          </div>
        </div>
        </div>
    </div>
  )
}
