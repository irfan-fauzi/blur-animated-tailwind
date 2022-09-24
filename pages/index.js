import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='max-w-screen-md p-5 mt-10 min-h-screen'>
    <div className='relative max-w-[500px] border'>
      <div className="absolute mix-blend-multiply h-72 w-72 top-0 left-4 bg-purple-300 rounded-full"></div>
      <div className="absolute mix-blend-multiply h-72 w-72 top-0 right-4 bg-yellow-300 rounded-full"></div>
      <div className="absolute mix-blend-multiply h-72 w-72 top-10 left-28 bg-pink-300 rounded-full"></div>
    </div>
    </main>
  )
}