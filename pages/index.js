import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <div className='bg-screen min-h-screen'>
      <header>
        <div className='h-5'></div>
        <div className='flex max-w-[1200px] mx-auto '>
          <div>
            <img src="/img/logo.png" alt="logo" className='w-[170px]' />
          </div>
          <div></div>
        </div>
      </header>
      <div className='h-5'></div>
      <Hero />
    </div>
  )
}