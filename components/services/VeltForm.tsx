import React from 'react'

export default function VeltForm({phoneEmail=false}:{phoneEmail?:boolean}) {
  return (
    <form className='py-12 border-t border-velt-pink rounded-lg max-w-[600px] px-2 sm:px-6 shadow-lg shadow-velt-pink/30   mx-auto'>
    <div className='mb-4'>
      <label htmlFor="name" className="text-white font-semibold block mb-1">First Name</label>
      <input type="text" placeholder='First Name' className='block w-full outline-none rounded-[6px] focus:border focus:border-velt-pink py-2 px-2'/>
    </div>
    <div className='mb-4'>
      <label htmlFor="name" className="text-white font-semibold block mb-1">Last Name</label>
      <input placeholder='Last Name' type="text" className='block w-full outline-none rounded-[6px] focus:border focus:border-velt-pink py-2 px-2'/>
    </div>
    {phoneEmail  && <div className='mb-4'>
      <label htmlFor="name" className="text-white font-semibold block mb-1">Phone Number</label>
      <input placeholder='Last Name' type="text" className='block w-full outline-none rounded-[6px] focus:border focus:border-velt-pink py-2 px-2'/>
    </div>}
    {phoneEmail  && <div className='mb-4'>
      <label htmlFor="name" className="text-white font-semibold block mb-1">Email</label>
      <input placeholder='Last Name' type="email" className='block w-full outline-none rounded-[6px] focus:border focus:border-velt-pink py-2 px-2'/>
    </div>}
    <div className='mb-4'>
      <label htmlFor="name" className="text-white font-semibold block mb-1">Message</label>
      <textarea placeholder='Write  Message' className='block w-full outline-none resize-none rounded-[6px] h-[200px] focus:border focus:border-velt-pink py-2 px-2'></textarea>
    </div>
    <button className="block bg-velt-pink py-3 font-semibold text-white w-full mt-8 rounded-[6px]">Submit</button>
</form>
  )
}
