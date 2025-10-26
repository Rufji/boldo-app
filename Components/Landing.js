import React from 'react'
import Nav from './Nav'
import page from '@/app/About/page'
import Footer from './Footer'

const Landing = () => {
  return (
    <div className=''>
      <main className=''>
        {/* SECTION 1 */}
          <Nav />
        <section className='bg-[#0A2640] h-screen flex flex-col items-center justify-around md:gap-2  position-relative'>
          <div className="flex flex-col items-center justify-between   gap-8 md:flex-row md:gap-30">
            <div className="text-center  md:text-start md:w-lg  md:py-8 px-4 flex flex-col items-center md:items-start justify-center gap-4">
              <div className="text-white flex flex-col items-center justify-center mb-8">
                <h3 className="font-extralight text-3xl mb-2 md:text-4xl lg:text-4xl">Save time by building  fast with Boldo Template </h3>
                <p className="text-gray-400 text-sm ">Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
              </div>
              <div>
                <button className="bg-[#65E4A3] mr-2 text-white h-10 px-8 text-center mb-8 rounded-3xl">Buy template</button>
                <button className="border border-white text-white h-10 px-8 text-center mb-8 rounded-3xl">Explore</button>
              </div>
            </div>
            <div className=" ">
              <img className="w-xs md:w-md" src="./images/hero-graphics.svg" alt="" />
            </div>
          </div>
          <div className='relative'>
            <div className='absolute md:w-full lg:w-full h-18 border-e-red-100   bg-[linear-gradient(90deg,#0A2640_0%,rgba(10,38,64,0.109375)_31.6%,rgba(10,38,64,0)_72.89%,#0A2640_97.87%)]'>
            </div>
            <div className=' flex flex-row-reverse items-center justify-between gap-8 p-4 md:w-full lg:w-full overflow-x-hidden'>
              <img src="./images/Logo (2).png" alt="" />
              <img src="./images/Logo (3).png" alt="" />
              <img src="./images/Logo (2).png" alt="" />
              <img src="./images/Logo (3).png" alt="" />
              <img src="./images/Logo (2).png" alt="" />
              <img src="./images/Logo (3).png" alt="" />
              <img src="./images/Logo (2).png" alt="" />
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className='bg-white'>
          <div className="flex flex-col items-center justify-center p-16 gap-8 md:flex-col md:gap-32 ">
            <div className="text-center w-sm+  md:w-4xl">
              <p className='text-sm text-[#777777] font-[400] mb-4'>Our Services</p>

              <h2 className=" text-[18px] md:text-[48px] font-manrope font-[400]  text-black">Handshake infographic mass market crowdfunding iteration.</h2>
            </div>

            <div className="flex flex-col items-center text-black justify-center gap-8 md:flex-row md:gap-6 lg:gap-16">
                <div className='card w-64 flex flex-col items-start justify-between gap-4'>
                  <div><img className="w-64" src="./images/service-1.png" alt="" /></div>
                  <div>
                    <h3 className="font-bold">Cool feature title</h3>
                    <p className='text-[16px]  font-extralight'>Learning curve network effects return on investment.</p>
                  </div>
                  <button className='border-b-1 text-[16px] border-b-black text-black inline-flex items-center gap-1'>
                    <span>Explore page</span> 
                    <img className='w-4' src="./images/arrow-right.png" alt="" /> 
                  </button>
                </div>

                <div className='card  w-64 flex flex-col items-start justify-between gap-4'>
                  <div><img className="w-64" src="./images/service-2.png" alt="" /></div>
                  <div>
                    <h3 className="font-bold">Cool feature title</h3>
                    <p>Learning curve network effects return on investment.</p>
                  </div>
                  <button className='border-b-1 text-[16px] border-b-black text-black inline-flex items-center gap-1'>
                    <span>Explore page</span> 
                    <img className='w-4' src="./images/arrow-right.png" alt="" /> 
                  </button>
                </div>

                <div className='card  w-64 flex flex-col items-start justify-between gap-4'>
                  <div><img className="w-64" src="./images/service-3.png" alt="" /></div>
                  <div>
                    <h3 className="font-bold">Cool feature title</h3>
                    <p>Learning curve network effects return on investment.</p>
                  </div>
                  <button className='border-b-1 text-[16px] border-b-black text-black inline-flex items-center gap-1'>
                    <span>Explore page</span> 
                    <img className='w-4' src="./images/arrow-right.png" alt="" /> 
                  </button>
                </div>
            </div>

            <div className="flex flex-col items-center text-black justify-center md:flex-col md:gap-6 lg:gap-16 gap-32">
              <div className='card  flex flex-col md:flex-row items-center justify-between md:gap-32  md:w-2xl lg:w-4xl'>
                <div className=" "><img className='w-xs md:w-md'  src="./images/Group-216.png" alt="" /></div>
                <div className='w-xs md:w-md flex flex-col md:items-start items-center justify-between md:gap-6'>
                  <h1 className="text-xl  font-extralight md:text-3xl mb-8">We connect our customers with the best, and help them keep up-and stay open.</h1>
                  <div>
                    <ul className='list-none text-sm md:text-lg space-y-2 my-4 mb-8'>
                      <li className='flex items-center '><img className='w-9 h-9 mr-4' src="./images/checkmark.png" alt="" />  <span> We connect our customers with the best.</span></li>
                      <li className='flex items-center '><img className='w-9 h-9 mr-4' src="./images/checkmark.png" alt="" />  <span> Advisor success customer launch party.</span></li>
                      <li className='flex items-center'><img className='w-9  h-9 mr-4' src="./images/checkmark.png" alt="" />  <span> Business-to-consumer long tail.</span></li>
                    </ul>
                  </div>
                  <button className="bg-[#0A2640] mr-2 text-white h-14 py-4 px-14 text-center md:mb-8 rounded-full">Start now</button>
                </div>
              </div>
            
              <div className='card  flex flex-col-reverse md:flex-row items-center justify-between md:gap-32  md:w-2xl lg:w-4xl'>
                <div className='w-xs md:w-lg flex flex-col items-start justify-between gap-6'>
                  <h1 className="text-center text-xl font-extralight md:text-start md:text-3xl mb-8">We connect our customers with the best, and help them keep up-and stay open.</h1>
                  <div>
                    <ul className='list-none text-[16px] md:text-lg  my-4 mb-8'>
                      <li className='flex items-center rounded-sm text-white bg-blue-950 shadow-lg p-4'><img className='w-4 h-4 mr-4' src="./images/feather.png" alt="" />  <span> We connect our customers with the best.</span></li>
                      <li className='flex items-center  shadow-lg p-4'><img className='w-4 h-4 mr-4' src="./images/star.png" alt="" />  <span> Advisor success customer launch party.</span></li>
                      <li className='flex items-center  shadow-lg p-4'><img className='w-4 h-4 mr-4' src="./images/sun.png" alt="" />  <span> Business-to-consumer long tail.</span></li>
                    </ul>
                  </div>
                </div>
                <div className=" "><img className='w-xs md:w-md'  src="./images/Group-281.png" alt="" /></div>
              </div>
            </div>


            
          </div>
        </section>

        {/* SECTION 3 */}
        <section>
          <div className="flex flex-row items-center justify-center p-16 gap-8 md:flex-col md:gap-32 bg-[#0A2640]">
            <div className="text-center md:text-start w-sm  md:w-3xl ">
              <h2 className="w-xs md:w-lg md:text-[34px]  font-manrope font-[400]  text-white">An enterprise template to ramp up your company website</h2>
              <div className='mt-8 flex flex-col items-center md:items-start justify-between gap-4 md:flex-row '>
                <div className='bg-white w-2xs md:w-[350px] p-4 rounded-xl flex flex-col items-center md:items-start justify-between gap-4 mb-8 shadow-lg'>
                  <p className='text-black text-sm mb-6'>“Buyer buzz partner network disruptive non-disclosure agreement business”</p>
                  <div className='flex flex-row items-center justify-start gap-4'>
                    <div><img src="./images/Ellipse-3.png" alt="" /></div>
                    <div className='text-black flex flex-col items-start justify-start'>
                      <h1>Albus Dumbledore</h1>
                      <p className='text-sm text-gray-400'>Manager @ Howarts</p>
                    </div>
                  </div>
                </div>

                <div className='bg-white w-2xs md:w-[350px] p-4 rounded-xl flex flex-col md:items-start items-center justify-between gap-4 mb-8 shadow-lg'>
                  <p className='text-black text-sm mb-6'>“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</p>
                  <div className='flex flex-row items-center justify-start gap-4'>
                    <div><img src="./images/Ellipse-4.png" alt="" /></div>
                    <div className='text-black flex flex-col items-start justify-start'>
                      <h1>Albus Dumbledore</h1>
                      <p className='text-sm text-gray-400'>Manager @ Howarts</p>
                    </div>
                  </div>
                </div>

                <div className='bg-white w-2xs md:w-[350px] p-4 rounded-xl flex flex-col md:items-start items-center justify-between gap-4 mb-8 shadow-lg'>
                  <p className='text-black text-sm mb-6'>“Release facebook responsive web design business model canvas seed money monetization.”</p>
                  <div className='flex flex-row items-center justify-start gap-4'>
                    <div><img src="./images/Ellipse-5.png" alt="" /></div>
                    <div className='text-black flex flex-col items-start justify-start'>
                      <h1>Albus Dumbledore</h1>
                      <p className='text-sm text-gray-400'>Manager @ Howarts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 */}
        <section>
          <div className="flex flex-col  text-black items-center justify-center p-16 gap-8 md:flex-col md:gap-16 bg-white">
            <div className="text-center w-xs  md:w-4xl">
              <img src="./images/image.png" alt="" />
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between mdgap-16 md:w-2xl lg:w-4xl'>
              <div className='w-1/1 md:w-1/2'>
                <h1 className='text-center md:text-start text-xl md:text-3xl font-extralight'>We connect our customers with the best, and help them keep up-and stay open.</h1>
              </div>
              <div className='w-xs md:w-1/2'>
                <div className='border-b-2 border-gray-300 my-8'>
                  <div className='flex flex-row items-center justify-between p-2'>
                    <p className='text-sm'>We connect our customers with the best?</p>
                    <img className='cursor-pointer' src="./images/dropdown.png" alt="" />
                  </div>
                </div>
                <div className='border-b-2 border-gray-300 my-8'>
                  <div className='flex flex-row items-center justify-between p-2'>
                    <p className='text-sm'>Android research & development rockstar?</p>
                    <img className='cursor-pointer' src="./images/dropdown.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 */}
        <section className='bg-white'>
          <div className="flex flex-col items-center justify-center p-16 gap-8 md:flex-col md:gap-16">
            <div className="text-center w-sm+  md:w-4xl">
              <p className='text-xs text-[#777777] font-[400] mb-4'>Our Services</p>

              <h2 className=" text-[16px] md:text-[48px] font-manrope font-[400]  text-black">Value proposition accelerator product management venture</h2>
            </div>

            <div className="flex flex-col items-start text-black justify-center gap-8 md:flex-row md:gap-6 lg:gap-16">
                <div className='card w-64 flex flex-col items-start justify-between gap-4'>
                  <div><img className="w-xs " src="./images/category-1.png" alt="" /></div>
                  <div>
                    <div className="flex flex-row items-center justify-start gap-4 mb-2">
                      <p className='font-bold text-[16px] text-[#0A2640]'>Category</p>
                      <span className='text-gray-400 text-sm'>November 22, 2021</span>
                    </div>
                    <p className='text-[16px]  font-extralight'>Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</p>
                  </div>
                  <div className='flex flex-row items-center justify-start gap-4 mt-4'>
                    <img className='w-[18px]' src="./images/avatar-1.png" alt="" />
                    <span className='text-black text-sm'>Chandler Bing</span>
                  </div>
                </div>  

                <div className='card w-64 flex flex-col items-start justify-between gap-4'>
                  <div><img className="w-64" src="./images/category-2.png" alt="" /></div>
                  <div>
                    <div className="flex flex-row items-center justify-start gap-4 mb-2">
                      <p className='font-bold text-[16px] text-[#0A2640]'>Category</p>
                      <span className='text-gray-400 text-sm'>November 22, 2021</span>
                    </div>
                    <p className='text-[16px]  font-extralight'>Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</p>
                  </div>
                  <div className='flex flex-row items-center justify-start gap-4 mt-4'>
                    <img className='w-[18px]' src="./images/avatar-2.png" alt="" />
                    <span className='text-black text-sm'>Chandler Bing</span>
                  </div>
                </div>  

                <div className='card w-64 flex flex-col items-start justify-between gap-4'>
                  <div><img className="w-64" src="./images/category-3.png" alt="" /></div>
                  <div>
                    <div className="flex flex-row items-center justify-start gap-4 mb-2">
                      <p className='font-bold text-[16px] text-[#0A2640]'>Category</p>
                      <span className='text-gray-400 text-sm'>November 22, 2021</span>
                    </div>
                    <p className='text-[16px]  font-extralight'>Beta prototype sales iPad gen-z marketing network effects value proposition</p>
                  </div>
                  <div className='flex flex-row items-center justify-start gap-4 mt-4'>
                    <img className='w-[18px]' src="./images/avatar-3.png" alt="" />
                    <span className='text-black text-sm'>Chandler Bing</span>
                  </div>
                </div>  
            </div>
            <button>
              <span className='text-black text-[16px] border-2 border-black py-2 px-4 rounded-3xl'>Load more</span>
            </button>
          </div>
        </section>

        {/* section 6 */}
        <Footer />
      </main>
    </div>
  )
}

export default Landing
