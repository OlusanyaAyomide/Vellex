import React, { useState } from 'react'
import VelImage from './utils/VelImage'
import { ResourceExporter } from '@/public/exporter'
import { navLinks } from '@/utils/constants'
import Link from 'next/link'
import ToggleButton from './utils/Toggler'
import SideBar from './SideBar'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'


export default function Header() {
  const [isToggled,setIsToggled] = useState(false)
  const router = useRouter()
  console.log(router.asPath)
  return (
    <div className=' z-40 top-0 w-full cont justify-between py-2  flex items-center'>
      <div>
        <div className='w-[110px] h-[36.9px] md:w-[120px] lg:w-[133px] md:h-[43px]'>
          <VelImage src={ResourceExporter.Logo}/>
        </div>
      </div>
      <div className='ml-6 lg:ml-16 md:flex w-full justify-between hidden max-w-[700px] '>
        {navLinks.map((item,key)=>{
          return(
            <Link key={key} href={item.link}><span className={`underscore hover:before:w-[70%] hover:before:bg-white before:transition-all before:duration-300  relative ${router.asPath ===item.link?"before:w-[70%]":"before:w-0"} before:w-[70%] before:bg-velt-pink before:-bottom-1 before:absolute before:h-[2px] text-white font-semibold text-sm lg:text-base before:left-[15%] before:rounded-lg`}>{item.text}</span></Link>
          )
        })}
      </div>
      <ToggleButton className='relative z-40' isActive={isToggled} onClick={()=>{setIsToggled((prev=>!prev))}}/>
      <AnimatePresence>
      {isToggled && <SideBar/>}
      </AnimatePresence>

    </div>
  )
}
