import React from 'react'
import VelImage from '../utils/VelImage'
import { ResourceExporter } from '@/public/exporter'
import { Herotext } from '@/utils/constants'
import {BsArrowRight} from "react-icons/bs"
import Link from 'next/link'

export default function Hero() {
  return (
    <div>
    <div className='-mt-10 z-20 min-h-screen flex items-center relative cont'>
      <div className='absolute z-30 inset-0 w-full h-full bg-black/60'></div>
      <div className='absolute inset-0 w-full h-full'>
        <VelImage src={ResourceExporter.HeroBg} piority={true} className='h-full w-full object-cover sm:object-fill'/>
      </div>
      <div className='flex flex-wrap mb-16 lg:mb-28 items-center  text-white relative z-30'>
        <div className='w-full lg:w-7/12 md:pr-2'>
          <span className='font-extrabold sm:text-[64px] md:text-[66px] lg:text-[69px] sm:leading-[70px] text-4xl md:text-6xl xl:text-[74px]'>We&apos;ve Got West Africa Covered</span>
        </div>
        <div className= 'font-bold w-full lg:w-5/12 text-2xl md:text-3xl mt-6 lg:mt-0'>
          <span className='text-lg  font-semibold md:pl-2'>
            {Herotext}
          </span>
        </div>
        <div className='absolute -bottom-10 lg:-bottom-16 '>
          <Link href={"/"}>
            <h1 className='flex items-center'>
            <span className='text-white pl-2 text-lg font-semibold'>Learn more</span><span className='ml-2 text-2xl font-extrabold'><BsArrowRight/></span>
            </h1>
          </Link>
        </div>
      </div>
    </div>
    <div className='mb-6 py-4 bg-black/90'>
      <div className='h-[200px] relative before:absolute before:bg-black/60 before:inset-0 before:w-full before:h-full'>
        <VelImage src={ResourceExporter.LogoB} piority={true} className='h-full w-full object-cover'/>
      </div>
      
    </div>
    </div>

  )
}
