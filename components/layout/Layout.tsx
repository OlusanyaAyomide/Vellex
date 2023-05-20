import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './utils/Footer'


interface LayoutInterface{
  children:React.ReactNode
  footer?:boolean
  header?:boolean
}


export default function Layout({children}:LayoutInterface) {
  const [isScrolling,setIsScrolling] = useState(false)
  useEffect(()=>{
    const handleScroll = ()=>{
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
      if (scrollPercentage > 10 && !isScrolling){
        console.log(isScrolling)
        setIsScrolling(true)
      }else if(scrollPercentage < 10 && isScrolling){
        setIsScrolling(false)
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[isScrolling,setIsScrolling])
  return (
    <div className='relative min-h-[100vh] bg-velt-offwhite pt-10 flex flex-col overflow-hidden max-w-[1400px] mx-auto'>
      {!isScrolling && <div className='absolute z-40 w-full top-2'><Header/></div>}
      {isScrolling && <div className='fixed bg-black/30 z-40 top-0 left-0 w-full'><Header/></div>}
      <main className='h-full flex-1 min-h-[50vh]'>{children}</main>
      <footer className='flex-none'>
        <Footer/>
      </footer>
    </div>
  )
}
