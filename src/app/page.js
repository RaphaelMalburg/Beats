import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

import SideBar from '@/containers/SideBar'
import Navbar from '@/containers/Navbar'
import Card from '@/components/Card'
import MainSection from '@/containers/MainSection'
import TopArtist from '@/containers/TopArtist'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
            <Navbar />
            <div className="flex gap-4 max-h-fit p-4 overflow-y-hidden">
              <SideBar />
              <div  id='divwrapper'className='w-full flex justify-around '>

                <MainSection />
                <TopArtist  />
              </div>

            </div>




    </>
  )
}
