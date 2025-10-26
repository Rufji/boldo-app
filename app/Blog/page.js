 "use client";

import React from 'react'
import Nav2 from '@/Components/Nav2'
import Footer from '@/Components/Footer'

const page = () => {
  return (
    <div>
      <Nav2 />
      <section className=''>
        <div className="max-w-9xl text-black mx-auto bg-white  flex flex-col items-center justify-center p-8 ">
          <p className="text-sm font-extralight mb-2">Blog</p>
          <p className="text-3xl md:text-6xl font-extralight text-center max-w-4xl">
            Thoughts and words
          </p>
        </div>
        <div className="flex flex-col  md:flex-row text-black mb-8 items-center gap-8 justify-center max-w-5xl  mx-auto p-4 space-y-4 md:space-y-0 md:space-x-4">
            <img className=' w-1/2' src="/images/blog/Rectangle.png" alt="Blog" />
            <div className="w-1/2 flex  flex-col items-start p-4 space-y-5">
                <div className='text-sm flex flex-row items-center justify-center space-x-3'>
                    <span>Category</span>
                    <span className='text-[#777777]'>November 22, 2021</span>
                </div>
                <p className='text-5xl w-lg text-center md:text-4xl md:text-start '>Pitch termsheet backing validation focus release.</p>
                <div className='flex flex-row items-center space-x-2'>
                    <img src="./images/blog/ellipse-10.png" alt="" />
                    <span>Chandler Bing</span>
                </div>
            </div>
        </div>
         <div>
          <hr className='border bg-[#0A2640] h-0.5 mx-auto max-w-5xl' />
         </div>
        
      </section>
      <section className='my-8'>
        <div className="max-w-7xl bg-white text-black mx-auto p-4 flex flex-col items-center justify-center mb-8">
            <div className="  lg:w-4xl mb-8">
              <p className="  font-bold text-5xl mb-4 text-left">Latest News</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-18 flex-wrap justify-center items-center  mb-8">
                <div className='card  w-64 flex flex-col items-start justify-between gap-4'>
                  <div><img className="w-64" src="./images/blog/grid-img-1.png" alt="" /></div>
                  <div>
                    <h3 className="font-bold">Cool feature title</h3>
                    <p>Learning curve network effects return on investment.</p>
                  </div>
                  <div className='flex flex-row items-center space-x-2'>
                    <img src="./images/blog/ellipse-10.png" alt="" />
                    <span>Chandler Bing</span>
                  </div>
                </div>

                <div className='card  w-64 flex flex-col items-start justify-between gap-4'>
                  <div><img className="w-64" src="./images/blog/grid-img-1.png" alt="" /></div>
                  <div>
                    <h3 className="font-bold">Cool feature title</h3>
                    <p>Learning curve network effects return on investment.</p>
                  </div>
                  <div className='flex flex-row items-center space-x-2'>
                    <img src="./images/blog/ellipse-10.png" alt="" />
                    <span>Chandler Bing</span>
                  </div>
                </div>

                <div className='card  w-64 flex flex-col items-start justify-between gap-4'>
                  <div><img className="w-64" src="./images/blog/grid-img-1.png" alt="" /></div>
                  <div>
                    <h3 className="font-bold">Cool feature title</h3>
                    <p>Learning curve network effects return on investment.</p>
                  </div>
                  <div className='flex flex-row items-center space-x-2'>
                    <img src="./images/blog/ellipse-10.png" alt="" />
                    <span>Chandler Bing</span>
                  </div>
                </div>

                <div className='card  w-64 flex flex-col items-start justify-between gap-4'>
                  <div><img className="w-64" src="./images/blog/grid-img-1.png" alt="" /></div>
                  <div>
                    <h3 className="font-bold">Cool feature title</h3>
                    <p>Learning curve network effects return on investment.</p>
                  </div>
                  <div className='flex flex-row items-center space-x-2'>
                    <img src="./images/blog/ellipse-10.png" alt="" />
                    <span>Chandler Bing</span>
                  </div>
                </div>

                <div className='card  w-64 flex flex-col items-start justify-between gap-4'>
                  <div><img className="w-64" src="./images/blog/grid-img-1.png" alt="" /></div>
                  <div>
                    <h3 className="font-bold">Cool feature title</h3>
                    <p>Learning curve network effects return on investment.</p>
                  </div>
                  <div className='flex flex-row items-center space-x-2'>
                    <img src="./images/blog/ellipse-10.png" alt="" />
                    <span>Chandler Bing</span>
                  </div>
                </div>

                <div className='card  w-64 flex flex-col items-start justify-between gap-4'>
                  <div><img className="w-64" src="./images/blog/grid-img-1.png" alt="" /></div>
                  <div>
                    <h3 className="font-bold">Cool feature title</h3>
                    <p>Learning curve network effects return on investment.</p>
                  </div>
                  <div className='flex flex-row items-center space-x-2'>
                    <img src="./images/blog/ellipse-10.png" alt="" />
                    <span>Chandler Bing</span>
                  </div>
                </div>

          </div>
            <button className='border border-[#0A2640] text-black h-10 px-8 text-center  rounded-3xl mt-8'>Load more</button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default page

