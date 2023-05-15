import { PartnershipList, partnershipText } from '@/utils/constants'
import React from 'react'
import {FaAngleRight} from "react-icons/fa"
import VelImage from '../utils/VelImage'

export default function Partnership() {
  const  PartnerHeader = ({className=""}:{className?:string})=>{
    return <div className={className}>
      <span className="w-fit text-[12px] bg-velt-offwhite mx-auto px-3 py-[2px] text-velt-pink">PREMIUM PARTNERS</span>
      <h1 className='mt-2 section-header w-fit '>Parnerships that works</h1>
      <span className="block text-sm sm:text-base mt-3">{partnershipText}</span>
      <h1 className='font-bold text-velt-pink mt-3 flex '>
        <span>Talk To Our Team</span>
        <span className='font-extrabold text-lg ml-8'><FaAngleRight/></span>
      </h1>
    </div>
  }
  return (
    <div className='py-16 -mt-2 cont lg:flex bg-white items-center'>
      <PartnerHeader className='lg:hidden mb-12 '/>
      <div className='w-full lg:w-6/12'>
        <div className='hidden lg:block relative right-32 h-[200px] w-[120%] mb-10 bg-velt-black/10 '></div>
      <div className='flex flex-wrap justify-center '>
        {PartnershipList.map((item,key)=>{
          return(
            <div key={key} className='w-6/12 md:w-3/12 mb-12'>
              <div className={`${key%2==0?"":"ml-auto md:ml-0"} w-[110px] h-[30px] sm:w-[120px] sm:h-[40px]`}>
                <VelImage src={item}/>
              </div>
            </div>
          )
        })}
      </div>
      </div>
      <PartnerHeader className='hidden w-full lg:block pl-3 lg:w-6/12'/>
    </div>
  )
}
