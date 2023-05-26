import React from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '@/utils/constants'
import Link from 'next/link'
import VelImage from './utils/VelImage'
import { ResourceExporter } from '@/public/exporter'
export default function SideBar() {
  const variants={
    initial:{
      // scale:0.1,
      y:2000,
      opacity:0,
      transition:{
        duration:0.5
      }
    },
    animate:{
      y:0,
      scale:1,
      duration:0.5,
      opacity:1,
      transition:{
        duration:0.3,
        when:"beforeChildren",
        staggerChildren:0.2
      }
    }
  }
  const sideBarChildren ={
    initial:{
      y:20,
      opacity:0
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:0.4
      }
    }
  }
  return (
    <motion.div exit="initial" initial="initial" variants={variants} animate="animate" className="bg-velt-dark fixed inset-0 w-full  h-screen lg:hidden flex items-center justify-center">
         <div className='fixed left-3 top-4 w-[140px] h-[52.9px] md:w-[133px] md:h-[43px]'>
        {<VelImage src={ResourceExporter.Logo}/>}
      </div>
      <div className='mt-6'>
        {navLinks.map((item,key)=>{
          return(
            <Link key={key} href={item.link} >
              <motion.span variants={sideBarChildren} className='text-velt-pink text-center my-3 text-xl sm:text-[22px] font-semibold block '>{item.text}</motion.span>
            </Link>
          )
        })}
      </div>
    </motion.div>
  )
}
