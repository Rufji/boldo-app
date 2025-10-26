import React from 'react'
import page from '@/app/About/page'
const Nav = () => {
  return (
    <div className='bg-[#0A2640]'>
      <nav className="flex items-center  md:px-24 md:pt-14 md:pb-12  justify-between   mx-auto">
        <div className="container  mx-auto flex items-center justify-between">
            <div className="text-white text-lg font-bold"><img src="./images/Logo.png" alt="" /></div>
            <div className="space-x-8 hidden md:flex items-center justify-center">
                <a href="#" className="text-gray-300 hover:text-white">Product</a>
                <a href="#" className="text-gray-300 hover:text-white">Services</a>
                <a href="/About" className="text-gray-300 hover:text-white">About</a>
                <button className="bg-cyan-50 text-black h-10 px-8 text-center  rounded-3xl">Log in</button>
            </div>
            <div className='hamburger md:hidden space-y-2 cursor-pointer'>
              <span className='block w-8 h-1 bg-white'></span>
              <span className='block w-8 h-1 bg-white'></span>
              <span className='block w-8 h-1 bg-white'></span>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
