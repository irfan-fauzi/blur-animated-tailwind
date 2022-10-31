import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <div className='bg-screen min-h-screen'>
      <div className='h-10'></div>
      <Hero />
    </div>
  )
}