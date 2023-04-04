'use client'
import ChartCard from '@/components/ChartCard'
import React, { useEffect, useState } from 'react'
import artist from '../images/artist.jpg'
import Image from 'next/image'

export default function     TopArtist() {

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
    <section className='w-1/4'>
        <h1 className='text-whiteish font-extrabold text-lg tracking-wider pl-4 '>Top charts</h1>
        <ChartCard key={key} musicName={title}/>
        <ChartCard />
        <ChartCard />

    <hr  className='w-4/5 mx-auto '/>

    <h1 className='text-whiteish font-extrabold text-lg tracking-wider  pl-4 py-4'>Top Artists</h1>
      <div className='grid grid-cols-2 gap-4 px-8'>
        <Image src={artist} alt=' top artists' className='w-20 h-20 rounded-full object-cover'/>
        <Image src={artist} alt=' top artists' className='w-20 h-20 rounded-full object-cover'/>
        <Image src={artist} alt=' top artists' className='w-20 h-20 rounded-full object-cover'/>
        <Image src={artist} alt=' top artists' className='w-20 h-20 rounded-full object-cover'/>
        <Image src={artist} alt=' top artists' className='w-20 h-20 rounded-full object-cover'/>
        <Image src={artist} alt=' top artists' className='w-20 h-20 rounded-full object-cover'/>
      </div>
    </section>
  )
}
