import Link from 'next/link'
import React from 'react'
import {GiSoundWaves} from 'react-icons/gi'

export default function Navbar() {
  return (
    <>
    <div className='flex w-full justify-between px-10 py-4'>
        <div className='flex '>
            <h1 className='font-bold tracking-wider text-yellow text-3xl'>BEATS</h1>
            <GiSoundWaves className='  text-yellow flex self-center ml-1 text-4xl' />
        </div>
        <ul className=' text-lg flex gap-10 tracking-wide font-semibold text-yellow'>

            <Link className='outline-2 outline outline-yellow rounded-xl flex self-center py-1 px-2 hover:animate-ping' href='/'>Sign in</Link>
            <Link className='rounded-xl px-2 text-dark bg-yellow self-center hover:animate-pulse py-1' href='/'>Login</Link>
        </ul>
    </div>
    </>
  )
}
