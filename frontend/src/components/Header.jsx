/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-pink-800 via-pink-400 to-pink-200 rounded-lg px-6 md:px-10 lg:px-20">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Trusted Makeup Artists, <br />
          Just a Click Away
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img
            className="w-28"
            src={assets.group_profiles}
            alt="Group Profiles"
          />
          <p>
            Explore our curated list of professional makeup artists and{" "}
            <br className="hidden sm:block" />
            book your appointment effortlessly.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-lg m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Get Styled
          <img className="w-3" src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt="Header Img"
        />
      </div>
    </div>
  );
}

export default Header