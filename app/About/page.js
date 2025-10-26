 "use client";

import React from 'react'
import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'
const page = () => {
  return (
    <div className=' '>
      <Nav />

      <div className="w-full  text-white flex flex-col items-center justify-center ">
        <section className="w-full max-w-10xl bg-[#0A2640] ">
          <div className=" max-w-2xl h-110  mb-12 flex flex-col items-center justify-center text-center px-4 mx-auto">
            <p className="text-white font-semibold mb-3">About</p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
              We love to make great things, things that matter.
            </h1>
            <p className="text-white/70 text-lg">
              Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
            </p>
          </div>
          
          <div className="max-w-9xl w-full mx-auto  bg-white h-120 flex items-end justify-center gap-y-16"> 
            <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 sm:h-[500px] mx-auto absolute left-1/2 -bottom-40 transform -translate-x-1/2 translate-y-1/4 w-[90%] sm:w-[85%]  rounded-2xl ">
              {/* Left column */}
              <div className="flex flex-col gap-4">
                <img
                  src="/images/about/grid-img1.jpg"
                  alt=""
                  className="w-full h-[240px] sm:h-[240px] object-cover rounded-xl"
                />
                <img
                  src="/images/about/grid-img4.png"
                  alt=""
                  className="w-full h-[240px] sm:h-[240px] object-cover rounded-xl"
                />
              </div>

              {/* Middle column (taller) */}
              <div className="flex items-center">
                <img
                  src="/images/about/grid-img2.png"
                  alt=""
                  className="w-full h-[500px] object-cover rounded-xl"
                />
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-4">
                <img
                  src="/images/about/grid-img3.png"
                  alt=""
                  className="w-full h-[240px] sm:h-[240px] object-cover rounded-xl"
                />
                <img
                  src="/images/about/grid-img5.png"
                  alt=""
                  className="w-full h-[240px] sm:h-[240px] object-cover rounded-xl"
                />
              </div>
            </div>

          </div>
      </section>
            <div className="text-start text-black max-w-2xl h-100 mx-auto mb-8 ">
              <p className="text-black/70 font-light mb-3">Our story</p>
              <h1 className="text-3xl md:text-3xl font-semibold leading-tight mb-4">
                Handshake infographic mass market crowdfunding iteration.
              </h1>
              <p className="text-black/70 text-lg">
                Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. 
              </p>
            </div>
      </div>

      <section className='w-full max-w-10xl text-white flex flex-col items-center justify-center py-20 px-4 bg-[#0A2640]'>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-white font-semibold ">About</p>
          <h1 className="text-3xl md:text-4xl md:w-2xl font-semibold leading-tight ">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
        </div>
        <div className='w-full max-w-5xl mt-16 flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-between'>
          <div className=''>
            <h1 className='text-6xl font-bold '>120m</h1>
            <p className='text-md'>Cool feature title</p>
          </div>
          <div>
            <h1 className='text-6xl font-bold '>10.000</h1>
            <p className='text-md'>Cool feature title</p>
          </div>
          <div>
            <h1 className='text-6xl font-bold '>240</h1>
            <p className='text-md'>Cool feature title</p>
          </div>
        </div>
      </section>

      <section className='w-full bg-white'>
        <div className='w-full max-w-10xl text-white flex flex-col items-center justify-center py-20 px-4  gap-8'>
          <div className='text-start max-w-2xl mx-auto text-black'>
            <p className=" font-semibold ">About</p>
            <h1 className="text-3xl md:text-4xl md:w-2xl font-semibold leading-tight ">
              The leadership team
            </h1>
            <p>
              Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. 
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-8 sm:gap-16 w-full max-w-5xl'>
            <div>
              <img src="/images/about/Image (1).png" alt="team" className='w-full h-auto object-cover rounded-lg' />
              <div className='text-start mt-4'>
                <h1 className='text-2xl font-semibold text-black mt-4'>Hellen Jacobs</h1>
                <p className='text-md text-black'>Co-Founder / CEO</p>
              </div>
            </div>
            <div>
              <img src="/images/about/Image (2).png" alt="team" className='w-full h-auto object-cover rounded-lg' />
              <div className='text-start mt-4'>
                <h1 className='text-2xl font-semibold text-black mt-4'>Hellen Jacobs</h1>
                <p className='text-md text-black'>Co-Founder / CEO</p>
              </div>
            </div>
            <div>
              <img src="/images/about/Image (3).png" alt="team" className='w-full h-auto object-cover rounded-lg' />
              <div className='text-start mt-4'>
                <h1 className='text-2xl font-semibold text-black mt-4'>Hellen Jacobs</h1>
                <p className='text-md text-black'>Co-Founder / CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full bg-[#0A2640]'>
        <div className='w-full max-w-10xl text-white flex flex-col items-center justify-center py-20 px-4  gap-8'>
          <div className='text-start max-w-2xl mx-auto  '>
            <p className=" font-semibold ">About</p>
            <h1 className="text-3xl md:text-4xl md:w-2xl font-semibold leading-tight ">
              The leadership team
            </h1>
            <p>
              Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. 
            </p>
          </div>
          <div className='text-start max-w-2xl mx-auto '>
            <div className='flex flex-row items-start justify-center gap-4 '>
              <img className='w-36' src="/images/about/grid-img3.png" alt="" />
              <div className='flex flex-col items-start justify-between gap-4'>
                <h4>We are commited.</h4>
                <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
              </div>
            </div>
          </div>
          <div className='text-start max-w-2xl mx-auto '>
            <div className='flex flex-row items-start justify-center gap-4 '>
              <img className='w-36' src="/images/about/grid-img3.png" alt="" />
              <div className='flex flex-col items-start justify-between gap-4'>
                <h4>We are commited.</h4>
                <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
              </div>
            </div>
          </div>
          <div className='text-start max-w-2xl mx-auto '>
            <div className='flex flex-row items-start justify-center gap-4 '>
              <img className='w-36' src="/images/about/grid-img3.png" alt="" />
              <div className='flex flex-col items-start justify-between gap-4'>
                <h4>We are commited.</h4>
                <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
              </div>
            </div>
          </div>
          <div className='text-start max-w-2xl mx-auto '>
            <div className='flex flex-row items-start justify-center gap-4 '>
              <img className='w-36' src="/images/about/grid-img3.png" alt="" />
              <div className='flex flex-col items-start justify-between gap-4'>
                <h4>We are commited.</h4>
                <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default page
