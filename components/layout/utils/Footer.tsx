import React from 'react'
import VelImage from './VelImage'
import { ResourceExporter } from '@/public/exporter'
import { FooterLinks } from '@/utils/constants'
import Link from 'next/link'

export default function Footer() {
  const Subscribe = ({className=""}:{className?:string})=>{
    return <div className={className}>
      <h1 className='font-extrabold text-base mb-1 text-white'>Subcribe</h1>
      <div className='flex flex-wrap gap-y-1 md:flex-nowrap'>
        <input type="text" placeholder='Enter Email Address'  className='w-full  py-3 focus:border-b-velt-pink focus:border-b bg-velt-offwhite px-2 md: rounded-md outline-none text-velt-black' />
        <button className='px-6 py-1 mt-1 lg:mt-0 hover:bg-velt-blue/70 transition-all duration-300 text-white bg-velt-pink rounded-md md:ml-2'>Subscribe</button>
      </div>
      <p className='mt-1 text-[#919191]'>Join our news letter today</p>
    </div>
  }
  return (
    <div className='bg-[#333333]'>
      <div className='pt-16 pb-12 cont flex flex-wrap text-white'>
        <div className='md:flex w-full lg:w-2/12 flex-wrap mb-6 lg:mb-0'>
          <div className='w-full  mb-6 lg:mb-0'>
            <div className='lg:mx-0 w-[110px] h-[36.9px] md:w-[133px] md:h-[43px]'>
              <VelImage src={ResourceExporter.Logo}/>
            </div>
          </div>
          <Subscribe className='lg:hidden'/>
        </div>
        <div className='w-full lg:w-5/12 mt-8 xs:flex lg:px-6'>
          {FooterLinks.map((item,key)=>{
            return(
              <div key={key} className='w-6/12 mb-4 xs:mb-0'>
                  <h1 className='text-base mb-4 font-extrabold'>{item.name}</h1>
                  {item.links.map((items,keys)=>{
                    return(
                      <Link href={items.link} key={keys}>
                        <span className={`${key===0?"hover:text-velt-pink":"hover:text-green-950"} block overflow-ellipsis break-words my-3`}>{items.name}</span>
                      </Link>
                    )
                  })}
              </div>
            )
          })}
        </div>
        <Subscribe className='hidden lg:block lg:w-4/12'/>
    </div>
    <div className='border-t flex-wrap sm:flex-nowrap gap-y-1 sm:gap-y-0 mx-4 md:mx-6 lg:mx-8 cont flex justify-between text-sm pt-4 pb-3 text-[#919191]'>
        <Link href={'/'}><span>©2022 Velex Group, Co. All rights reserved.</span></Link>
        <span>privacy Policy</span>
        <span>Terms of Services</span>
        <span>Lagos Nigeria</span>
    </div>
    </div>
 
  )
}
