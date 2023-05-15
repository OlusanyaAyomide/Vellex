import { TalkToUsText } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'

export default function TalkToUS() {
  return (
  <div className='py-16 flex flex-wrap cont'>
    <div className='w-full lg:w-6/12'>
      <span className='text-velt-pink px-3 text-sm py-[2px] block '>WE MEAN BUSINESS</span>
      <p className='mt-6'>{TalkToUsText.headText} <Link href={"/"}><span className="text-velt-pink">Read More</span></Link></p>
      <div className='flex mt-6 flex-wrap'>
        {TalkToUsText.contents.map((item,key)=>{
          return(
            <div key={key} className={`${key%2===0?"pl-2 lg:pr-2 md:pr-6":" pr-2 lg:pl-2 md:pl-6"} w-6/12 mb-4`}>
              <h1 className='mb-3'><span className='text-[74px]'>{item.bigText}</span><span>{item.followUp}</span></h1>
              <p className='text-sm sm:text-base'>{item.text}</p>
            </div>
          )
        })}
      </div>
    </div>
    <form className='bg-white px-3 mt-6 lg:mt-0 sm:px-5 md:px-8 rounded-sm shadow-sm py-12 w-full lg:w-6/12 mx-auto max-w-[450px]'>
      <h1 className='section-header mb-1'>Talk To Us</h1>
      <p className='text-sm sm:text-base mb-4'>We will respond to your email as soon as we can!</p>
      <input type="text" className='py-3 px-2 border my-4 w-full border-velt-black/40 rounded-[5px] outline-none focus:border-velt-pink' placeholder='Name'/>
      <input type="email" className='py-3 px-2 border-b my-4 w-full border-velt-black/40 rounded-[5px] outline-none focus:border-velt-pink' placeholder='Email'/>
      <input type="text" className='py-3 px-2 border my-4 w-full border-velt-black/40 rounded-[5px] outline-none focus:border-velt-pink' placeholder='Company'/>
      <textarea className='rounded-md w-full h-[120px] outline-none resize-none border-b focus:border-velt-pink' placeholder='Message'>
      </textarea>
      <button className=' hover:bg-velt-blue/70 transition-all duration-300 text text-white rounded-md block mt-8 bg-velt-pink py-2 px-6'>Talk To Our Team</button>
    </form>
  </div>
  )
}
