import React from 'react'

export default function ServiceForm() {
  return (
    <div className='cont bg-velt-dark py-16'>
        <h1 className="section-header text-center mb-4 text-white">Get In Touch</h1>
        <form className='py-8 rounded-lg max-w-[500px] px-4 sm:px-6 shadow-lg shadow-white/30 mx-auto'>
            <div className='mb-4'>
              <label htmlFor="name" className="text-white font-semibold block mb-1">First Name</label>
              <input type="text" placeholder='First Name' className='block w-full outline-none rounded-[6px] focus:border focus:border-velt-pink py-2 px-2'/>
            </div>
            <div className='mb-4'>
              <label htmlFor="name" className="text-white font-semibold block mb-1">First Name</label>
              <input placeholder='Last Name' type="text" className='block w-full outline-none rounded-[6px] focus:border focus:border-velt-pink py-2 px-2'/>
            </div>
            <div className='mb-4'>
              <label htmlFor="name" className="text-white font-semibold block mb-1">Message</label>
              <textarea placeholder='Write  Message' className='block w-full outline-none resize-none rounded-[6px] h-[200px] focus:border focus:border-velt-pink py-2 px-2'></textarea>
            </div>
            <button className="block bg-velt-pink py-3 font-semibold text-white w-full mt-8 rounded-[6px]">Submit</button>
        </form>
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
