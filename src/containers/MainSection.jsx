import Card from '@/components/Card'
import { genres } from '@/constants/genres'
import React from 'react'

export default function MainSection() {
  return (
    <>

        <main className='w-auto col-span-4 h-screen'>
            <h2  className='text-whiteish px-2 text-2xl font-extrabold tracking-widest py-1 rounded'>Discover Latest <span className='text-yellow'>Beats</span></h2>
            <div className='flex justify-center self-center'>
                <select name="" id="" className='text-whiteish bg-light-dark px-2 py-1 rounded'>
                    {genres.map((genre) => <option key={genre.value} value={genre.value}> {genre.title}</option>)}
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 gap-8 pt-8 " >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>

        </main>

    </>
  )
}
