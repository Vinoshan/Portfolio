import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 my-4'>

      <div className='col-span-7 place-self-center'>
        <h1 className='text-white mb-4 text-4xl lg:text-6xl  font-extrabold' >Hello! I'm Vino</h1>
        <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus libero perspiciatis earum, obcaecati culpa sit modi enim aspernatur assumenda beatae.
        </p>

        <div>
          <button className='px-6 py3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Hire Me</button>
          <button className='px-6 py3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white'>Download CV</button>
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
