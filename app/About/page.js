import React from 'react'
import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'
const page = () => {
  return (
    <div className='bg-red-500 flex flex-col items-center justify-center'>
      <Nav />
        <div className='container bg-gray-900'>
            <div>
                <section className='w-screen h-screen'>
                    <span>About</span>
                    <h1>We love to make great things, things that matter.</h1>
                    <p>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
                </section>
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default page
