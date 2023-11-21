'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-12 my-4'>

      <div className='col-span-7 place-self-center text-center sm:text-left'>
        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl  font-extrabold' >
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-lime-500 '>Hello! I'm {""}</span>

          <br />

          <TypeAnimation
            sequence={[
              'Vinoshan Kugendran',
              1000,
              'A Gamer',
              1000,
              'A Web Developer',
              1000,
            ]}
          />

        </h1>
        <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus libero perspiciatis earum, obcaecati culpa sit modi enim aspernatur assumenda beatae.
        </p>

        <div>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-lime-500 hover:to-slate-200 text-white'>Hire Me</button>
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-lime-500  hover:bg-slate-800 text-white mt-3'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV </span>
          </button>
        </div>
      </div>



      <div className='col-span-5 place-self-center mt-4 lg:mt-0'>

        <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[305px] lg:h-[305px] relative'>
          <Image src='/images/pfp.png'
            alt='profile picture'
            width={300} height={300}
            className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' />
        </div>

      </div>
    </div>
  )
}

export default HeroSection