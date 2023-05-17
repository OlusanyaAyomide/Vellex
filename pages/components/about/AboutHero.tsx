import { AboutText } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'
import {TfiAngleRight} from "react-icons/tfi"

export default function AboutHero() {
  return (
    <div className='lg:min-h -mt-16 pt-28 pb-28  screen bg-[#111212] lg:bg-[#363B3A] cont'>
      <div className='flex my-8 items-center'>
        <Link href={"/"}><span className='text-base font-semibold text-velt-pink'>Home</span></Link>
        <span className='ml-2  text-[10px] text-[#77776A]'><TfiAngleRight/></span>
        <span className='ml-2 font-semibold  text-base text-[#77776A]'>About</span>
      </div>
      <div className='lg:w-8/12 max-w-[700px] mt-4 lg:mt-20 lg:px-12 lg:py-16 lg:bg-white text-white lg:text-velt-black'>
        <h1 className=' massive-text mb-6 lg:text-[64px] xl:text-[64px]'>We make the complex, simple</h1>
        <span className="text-lg lg:text-xl md:text-2xl mt-6">{AboutText}</span>
      </div>
    </div>
  )
}
