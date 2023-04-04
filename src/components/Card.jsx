'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import albumCover from '../images/albumcover.jpg'
import { HiPlay } from 'react-icons/hi'


export default function Card() {
    const [showOverlay, setShowOverlay] =useState(false)
    const handleMouseEnter = () => {
        setShowOverlay(true)
    }
    const handleMouseLeave = () => {
        setShowOverlay(false)
    }

  return (
    <div
    className='text-whiteish bg-light-dark  w-fit p-4 rounded-md tracking-wide '
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>

        <div className='relative w-auto'>
            <Image src={albumCover} alt='Album cover' className=' ' />

            {showOverlay && (
                <div className='absolute top-0 left-0  opacity-95 w-full  h-full  hover:flex  justify-center  self-center animate-pulse	 z-20 transition-all  ease-in-out'>
                    <HiPlay className='text-whiteish mx-auto  font-bolder text-8xl flex self-center align-middle ' />
                </div>
            )}

        </div>
        <h2 className='font-bold text-xl py-3'>Music Title</h2>
        <h3 className='font-medium'>Artits Title</h3>
    </div>
  )
}
