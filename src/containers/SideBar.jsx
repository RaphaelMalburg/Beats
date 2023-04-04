'use client'
import Link from 'next/link'
import React from 'react'
import {MdClose} from 'react-icons/md'
import albumcover from '../images/albumcover.jpg'
import Image from 'next/image'
import {HiPlay, HiOutlineMenuAlt4} from 'react-icons/hi'
import { useState } from 'react'

export default function SideBar() {
    const [sidebarOpen, SetSidebarOpen] = useState(false)

    const toggleSidebar = () =>{
        SetSidebarOpen(!sidebarOpen)}

  return (
    <div className='relative outline-whiteish rounded-e-md h-screen -ml-5'>
    {sidebarOpen ?
    (
        <div className='bg-dark w-12 outline outline-2  outline-whiteish text-whiteish transition-all h-screen duration-500   shadow-inner rounded-md'>
            <HiOutlineMenuAlt4 id='open' className='text-whiteish font-bolder text-2xl absolute top-4 left-3 '  onClick={toggleSidebar}/>
        </div>
    )
    :
   (<div id='sidebar' className='bg-dark w-64 gray-950 transition-all duration-500 outline outline-2  h-full outline-whiteish text-whiteish h-2/3 px-10 shadow-inner rounded-md'>
        <div className=' flex flex-col relative pb-4'>
            <div>
                <MdClose id='close' className='text-whiteish font-bolder text-2xl absolute top-4 left-44' onClick={toggleSidebar} />

            </div>

            <ul className='flex flex-col justify-evenly gap-8 font-medium tracking-wider text-xl pt-16 pb-20'>
                <Link  href='/'>Discover</Link>
                <Link  href='/'>Top Artits</Link>
                <Link  href='/'>Playlists</Link>
                <Link  href='/'>Recently Played</Link>
                <Link  href='/'>Create Playlist</Link>


            </ul>
        </div>
        <div className='flex flex-col gap-1 '>
        <hr />
            <Image src={albumcover} alt='Album Cover' className='w-2/3 pt-6'/>
            <h2>Artist</h2>
            <h2> Music name - Album Title</h2>

            <HiPlay className='text-whiteish font-bolder text-2xl ' />

        </div>
    </div>)
}

    </div>
  )
}
