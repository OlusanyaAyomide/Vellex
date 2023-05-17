import React, { useEffect, useState } from 'react'
import VelImage from '../utils/VelImage'
import { ResourceExporter } from '@/public/exporter'
import { Herotext, TopText2,Herotext2,HeroText3,TopText3 } from '@/utils/constants'
import {BsArrowRight} from "react-icons/bs"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HeroContainer,HeroItems } from '@/utils/animation'
import ReactPlayer from 'react-player'
import Video from "../../../../public/"
interface HeroInterface{
  BoldText:string
  smallText:string
}
export default function Hero() {
  const [isMounted,setisMounted] = useState(false)

  useEffect(()=>{
    setisMounted(true)
    const interval = setInterval(()=>{
      setTextNumber((prev)=>{
        return prev===2?0:prev+1
      })
    },6000)
    return ()=>{clearInterval(interval)}
  },[])
  const [textNumber,setTextNumber] = useState(0)
  const HeaderText=({BoldText,smallText}:HeroInterface)=>{
    return(
      <motion.div  initial="initial" animate="animate" variants={HeroContainer} className='flex flex-wrap mb-16 lg:mb-28 items-center  text-white relative z-30'>
        <motion.div variants={HeroItems} className='w-full lg:w-7/12 md:pr-2'>
          <span  className='font-extrabold sm:text-[64px] md:text-[66px] lg:text-[69px] sm:leading-[70px] text-4xl md:text-6xl xl:text-[74px]'>{BoldText}</span>
        </motion.div>
        <motion.div variants={HeroItems} className= 'font-bold w-full lg:w-5/12 text-2xl md:text-3xl mt-6 lg:mt-28'>
          <span  className='text-lg  font-semibold md:pl-2'>
            {smallText}
          </span>
        </motion.div>
        <div className='absolute -bottom-10 lg:-bottom-16 '>
          <Link href={"/"}>
            <motion.h1 variants={HeroItems} className='flex items-center'>
            <span className='text-white pl-2 text-lg font-semibold'>Learn more</span><span className='ml-2 text-2xl font-extrabold'><BsArrowRight/></span>
            </motion.h1>
          </Link>
        </div>
      </motion.div>
    )
  }
  return (
    <div>
    <div className='-mt-10 z-20 min-h-screen flex items-center relative cont'>
      <div className='absolute z-30 inset-0 w-full h-full bg-black/60'></div>
      <div className='absolute inset-0 w-full h-full'>
        {isMounted && <div className='h-full w-full relative z-20'>
          <ReactPlayer  url={"../../../../public/heroVideo.mp4"} playing={true} loop={true} muted={true} height={"100%"} width={"100%"}/>
        </div>}
        <VelImage src={ResourceExporter.HeroBg} piority={true} className='h-full w-full relative -z-10 object-cover sm:object-fill'/>
      </div>
      {textNumber === 0 && <HeaderText BoldText='We&apos;ve Got West Africa Covered' smallText={Herotext}/>}
      {textNumber === 1 && <HeaderText BoldText={TopText2} smallText={Herotext2}/>}
      {textNumber === 2 && <HeaderText BoldText={TopText3} smallText={HeroText3}/>}
    </div>
    <div className='mb-6 py-4 bg-black/90'>
      <div className='h-[200px] relative before:absolute before:bg-black/60 before:inset-0 before:w-full before:h-full'>
        <VelImage src={ResourceExporter.LogoB} piority={true} className='h-full w-full object-cover'/>
      </div>
      
    </div>
    </div>

  )
}
