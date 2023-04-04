'use client'
import React, { useEffect, useState } from 'react'
import albumCover from '../images/albumcover.jpg'
import { HiPlay } from 'react-icons/hi'
import Image from 'next/image'

export default function ChartCard({musicName,artistNAme}) {

    const [data,setData] = useState()
const url = 'https://shazam.p.rapidapi.com/artists/get-top-songs?id=567072&l=en-US';
    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '75f97378b7msh9bb3ee169038e3bp189ab5jsn745d67991714',
              'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
          };

          fetch(url, options)
            .then(response => response.json())
            .then(response => {
                console.log('resposta do get',response)
                setData(response )
            })
            .catch(err => { console.log(err)})
    }, [])


  return (

        <div className='flex p-4 justify-between self-center hover:opacity-80'>
            <div className='w-20'>
                <Image src={albumCover} alt='album cover' />
            </div>
            <div className='flex flex-col justify-around'>
                <h2 className='text-whiteish font-bold text-xl'>{musicName}</h2>
                <h4 className='text-whiteish font-semibold text-base'>{artistNAme}</h4>
            </div>
            <HiPlay className='text-whiteish font-bold text-3xl self-center'/>
       </div>


  )
}
