import React from 'react'
import tape from '../images/hosein-zanbori-wvbOWcIDuYg-unsplash.jpg'
import Image from 'next/image'
import {RiPlayCircleFill} from 'react-icons/ri'

export default function HomeCTA() {
  return (
    <div className='text-slate-300 flex relative h-4/6 bg-zinc-900 '>
        <div className='m-8 p-8 md:h-72 h-56 flex gap-12 '>
            <Image  src={tape} alt='Tapes' className='w-auto h-auto relative ' />
            <div>
                <h1> Titulo da playlist</h1>
                <h1> Descrição</h1>
                <br />
                <hr />
                <div>
                    <RiPlayCircleFill />
                </div>
            </div>
        </div>
        <div>
            <ul>
                <li>#</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <ul>
                <li>Title</li>
                <li><Image src={tape} alt='album cover' className='w-4  h-4' /></li>
                <li><Image src={tape} alt='album cover' className='w-4  h-4' /></li>
                <li><Image src={tape} alt='album cover' className='w-4  h-4' /></li>
            </ul>
            <ul>
                <li></li>
                <li>Music name</li> <span> </span>
                <li></li>
                <li></li>
            </ul>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

    </div>

  )
}
