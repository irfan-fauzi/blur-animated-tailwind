import Image from 'next/image'
import React from 'react'
import HeroImage from '../public/img/hero-image.png'

const Hero = () => {
  return (
    <div className='max-w-[1200px] mx-auto rounded-3xl px-12 bg-hero font-inter font-thin '>
			<div className='h-10'></div>
			<div className='flex items-center'>
				<div>
					<h1 className='text-gray-100 text-5xl font-light w-9/12 leading-[1.1]'>Tempat No1 Cari dan Simpan Resep Masakan</h1>
					<div className='h-5'></div>
					<h2 className='text-gray-300 w-9/12'>Apa isi kulkasmu? Kombinasikan beberapa bahan untuk mendapatkan ide baru. Hanya di aplikasi Cookpad. Tempe. Semua. mendol. sambal ulek. semur tahu.</h2>
					<div className='h-5'></div>
					<div className='flex items-center leading-[1.1] gap-3'>
						<img src="/img/users.png" alt="" />
						<p className='text-gray-100 text-xs'>400+ pengguna di seluruh dunia</p>
					</div>
					<div className='h-5'></div>
					<div className='flex gap-2'>
						<input type="text" className='p-2 w-6/12 rounded-sm'/>
						<button className='bg-orange-600 px-8 text-white capitalize rounded-sm'>cari</button>
					</div>
				</div>
				<div>
					<img src="/img/hero.png" alt="" />
				</div>
			</div>
			<div className='h-10'></div>
    </div>
  )
}

export default Hero