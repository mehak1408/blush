/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='flex flex-col my-10 md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt='about_image' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to BlushBay, your trusted partner in enhancing your beauty with care, creativity, and confidence. At Glamora, we understand the desire to look and feel your best, whether it’s for a special occasion, a professional event, or simply your everyday glow.</p>
          <p>BlushBay is committed to excellence in makeup artistry and beauty services. We continuously refine our techniques, using premium products and the latest innovations to deliver results that are flawless, refined, and long-lasting. Whether you’re preparing for your wedding day, a special occasion, or simply seeking a touch of everyday elegance, BlushBay is here to perfect your look every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at BlushBay is to redefine beauty experiences by blending sophistication with personalization. We aim to create a space where every client feels valued, confident, and radiant—ensuring that beauty is not just seen, but truly felt.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-pink-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Expertise:</b>
          <p>Our team of skilled makeup artists and beauty professionals ensures flawless results tailored to your style.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-pink-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Easily book appointments and access top-rated beauty services anytime, anywhere.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-pink-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalized Care:</b>
          <p>Receive customized beauty advice and session reminders to keep you looking your best.</p>
        </div>
      </div>
    </div>
  )
}

export default About