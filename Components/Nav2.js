import React from 'react'

const Nav2 = () => {
  return (
    <div>
      <nav className="flex items-center  justify-between md:px-24 md:mt-14 md:mb-12 mx-auto">
        <div className="container  mx-auto flex items-center justify-between">
            <div className="text-white text-lg font-bold"><img src="./images/og-Logo.png" alt="" /></div>
            <div className="space-x-8 hidden md:flex items-center justify-center">
                <a href="#" className="text-[#0A2640] hover:text-white">Product</a>
                <a href="#" className="text-[#0A2640] hover:text-white">Services</a>
                <a href="/About" className="text-[#0A2640] hover:text-white">About</a>
                <button className="border border-[#0A2640] text-black h-10 px-8 text-center  rounded-3xl">Log in</button>
            </div>
            <div className='hamburger md:hidden space-y-2 cursor-pointer'>
              <span className='block w-8 h-1 bg-black'></span>
              <span className='block w-8 h-1 bg-black'></span>
              <span className='block w-8 h-1 bg-black'></span>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav2;
