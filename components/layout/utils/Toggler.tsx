import React,{useEffect} from 'react'
import { toggleAnimation,toggleCenter } from '@/utils/animation'
import { motion,useAnimation } from 'framer-motion'

interface ToggleInterface{
  md?:boolean
  onClick:()=>void
  isActive:boolean
  className?:string
}

export default function ToggleButton({md=false,onClick,isActive,className=""}:ToggleInterface){
    const control = useAnimation()
    const handleChange =()=>{
      onClick()
  }

  useEffect(()=>{
    if(isActive){control.start("animate")}
    else{
      control.start("animateback")}
      
  },[isActive,control])

  return (
    <button className={`flex ${md?"lg:hidden":"md:hidden"} ml-6 ${className} flex-col justify-between h-[20px] w-[24px] cursor-pointer`} onClick={handleChange}>
    <motion.span className='toggler' variants={toggleAnimation(1)} initial="initial" animate={control}></motion.span>
    <motion.span className='toggler' variants={toggleCenter()} initial="initial" animate={control}></motion.span>
    <motion.span className='toggler' variants={toggleAnimation(3)} initial="initial" animate={control}></motion.span>
</button>
  )
}
