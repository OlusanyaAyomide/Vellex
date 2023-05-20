import React, { useState } from 'react'
import VelImage from './utils/VelImage'
import { ResourceExporter } from '@/public/exporter'
import { navLinks } from '@/utils/constants'
import Link from 'next/link'
import ToggleButton from './utils/Toggler'


export default function Header() {
  const [isToggled,setIsToggled] = useState(false)

  return (
    <div className=' z-40 top-0 w-full cont justify-between py-2  flex items-center'>
      <div>
        <div className='w-[110px] h-[36.9px] md:w-[133px] md:h-[43px]'>
          <VelImage src={ResourceExporter.Logo}/>
        </div>
      </div>
     
      <div className='ml-20 md:flex w-full justify-between hidden max-w-[700px] '>
        {navLinks.map((item,key)=>{
          return(
            <Link key={key} href={item.link}><span className='text-white font-semibold text-sm lg:text-base'>{item.text}</span></Link>
          )
        })}
      </div>
      <ToggleButton isActive={isToggled} onClick={()=>{setIsToggled((prev=>!prev))}}/>
    </div>
  )
}
