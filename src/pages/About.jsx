import React from 'react'
import Button from '../components/Common/Button'
import Header from '../components/HeaderComponent/Header'
import Footer from '../components/FooterComponent/Footer'

const About = () => {
  return (
    <>
    <div className='  relative bg-[#FFF7ED] '>
        <div className=' w-full '>
          <img src='/images/about1.png' alt='about hero image' className='w-full max-h-80 object-cover' />
        </div>
        <div className='p-10 md:max-w-3xl lg:max-w-full mx-auto'>
        <h1 className='text-[#161616] text-[32px] font-bold mb-5'>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <div className='text-[#161616] font-medium text-[16px] mb-10'>
          <p className='mb-3'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel  plans can go off without a hitch.
          (Hitch costs extra 😉)</p>
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className='bg-[#FFCC8D] rounded-xl p-10 '>
          <p className='text-[#161616] font-bold text-[24px]'>Your destination is waiting. Your van is ready.</p>
          <Button className="bg-[#161616] rounded-xl px-6 py-3 w-52 mt-5">Explore our vans</Button>
        </div>
        </div>
    </div>
    </>
   
  )
}

export default About