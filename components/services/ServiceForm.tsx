import React from 'react'
import VeltForm from './VeltForm'

export default function ServiceForm() {
  return (
    <div className='cont bg-velt-dark py-16'>
        <h1 className="section-header text-center mb-4 text-white">Get In Touch</h1>
        <VeltForm/>
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
  )
}
