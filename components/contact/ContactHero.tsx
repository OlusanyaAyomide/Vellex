import React from 'react'
import VeltForm from '../services/VeltForm'

export default function ContactHero() {
  return (
   <div className='cont -mt-12 pt-24 pb-8 bg-velt-dark'>
      <span className="block massive-text my-12 text-white text-center">Hi There</span>
      <span className="block text-base text-center  text-white">
        You can reach us on info@velexadvisory.com.ng or use the form below
      </span>
      <div className='mt-8'>
        <VeltForm phoneEmail={true}/>
        <div className='flex flex-wrap text-sm sm:text-base mt-12'>
          <div className='w-full md:w-6/12 mb-2 md:mb-0 md:pr-12'>
            <span className="block text-center text-white font-semibold text-lg">Nigeria</span>
            <span className="text-velt-light block mb-2 text-center">1b Adebayo Doherty Road, Lekki Phase 1, Lagos, Nigeria</span>
            <span className="text-velt-pink block text-center">+234 909 390 0677</span>
          </div>
          <div className='w-full md:w-6/12 md:pl-12 '>
            <span className="block text-center text-white font-semibold text-lg">Kenya</span>
            <span className="text-velt-light text-center block mb-2">1b Adebayo Doherty Road, Lekki Phase 1, Lagos, Nigeria</span>
            <span className="text-velt-pink block text-center">+234 909 390 0677</span>
          </div>
        </div>
      </div>
   </div>
  )
}
