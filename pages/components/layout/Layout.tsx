import React from 'react'
import Header from './Header'
import Footer from './utils/Footer'


interface LayoutInterface{
  children:React.ReactNode
  footer?:boolean
  header?:boolean
}

export default function Layout({children}:LayoutInterface) {
  return (
    <div className='min-h-[100vh] bg-velt-offwhite pt-10 flex flex-col overflow-hidden max-w-[1400px] mx-auto'>
      <Header/>
      <main className='h-full flex-1 min-h-[50vh]'>{children}</main>
      <footer className='flex-none'>
        <Footer/>
      </footer>
    </div>
  )
}
