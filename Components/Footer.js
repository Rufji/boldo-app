import React from 'react'

const Footer = () => {
  return (
    <section className='bg-white flex flex-col items-center justify-center md:p-16 gap-8 md:flex-col md:gap-8'>
          <div className="flex w-full flex-col md:rounded-lg items-center relative justify-center p-16 gap-8 md:flex-col md:gap-16 bg-[#0A2640] overflow-hidden">
            <div className='absolute rounded-full w-[1300px] h-[1300px] bg-[#1C3D5B] opacity-50 -top-[1100px] left-4/4 -translate-x-3/4 '></div>

            <p className='text-white  text-lg md:text-4xl md:w-lg z-10 text-center font-extralight'>An enterprise template to ramp up your company website</p>
            <div className="flex flex-col md:flex-row z-10 items-center justify-center md:w-md gap-4 text-black">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 text-xs md:text-lg rounded-4xl md:w-2/3 bg-white text-black" />
              <button className="bg-[#65E4A3] text-black text-xs md:text-lg md:w-1/3 py-2 px-4 rounded-4xl">Start now</button>
            </div>
          </div>
          <div className='flex  md:w-full flex-col items-center relative justify-start md:flex-row md:gap-16'>
            <div className='flex flex-col items-center md:w-md md:items-start justify-between gap-4 mb-2 text-black'>
              <img src="./images/og-Logo.png" alt="" />
              <p className='text-md text-center w-xs md:text-start'>
                Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter. 
              </p>
              <span>All rights reserved.</span>
            </div>

            <div className='flex flex-col  md:flex-row text-[#777777] items-center md:items-start justify-between gap-8 md:w-xl lg:w-md'>
              <div className='flex flex-col items-center md:items-start md:gap-4'>
                <span className='font-bold mb-2 text-black'>Landings</span>
                <span>Home</span>
                <span>Products</span>
                <span>Services</span>
              </div>

              <div className='flex flex-col items-center md:items-start md:gap-4'>
                <span className='font-bold mb-2 text-black'>Landings</span>
                <span>Home</span>
                <div><span>Career</span> <span className='bg-[#65E4A3] text-black p-2 text-xs rounded-3xl'>Hiring!</span></div>
                <span>Services</span>
              </div>

              <div className='flex flex-col items-center md:items-start md:gap-4'>
                <span className='font-bold mb-2 text-black'>Landings</span>
                <span><a href="/Blog">Blog</a></span>
                <span>Products</span>
                <span>Services</span>
              </div>

              
            </div>
          </div>
        </section>
  )
}

export default Footer
