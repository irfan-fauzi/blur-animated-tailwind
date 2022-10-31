import Image from 'next/image'
import React from 'react'
import HeroImage from '../public/img/hero-image.png'

const Hero = () => {
  return (
    <div className='max-w-[1200px] mx-auto rounded-3xl px-10 bg-hero font-inter font-thin '>
			<div className='h-10'></div>
			<div className='flex'>
				<div>
					<h1 className='text-gray-300 text-5xl'>Tempat No1 Cari dan Simpan resep masakan</h1>
					<div className='h-5'></div>
					<h2 className='text-gray-300'>Apa isi kulkasmu? Kombinasikan beberapa bahan untuk mendapatkan ide baru. Hanya di aplikasi Cookpad. Tempe. Semua. mendol. sambal ulek. semur tahu.</h2>
					<div className='h-5'></div>
					<div className='flex'>
						<div className='text-gray-300'>icon user</div>
						<p className='text-gray-300'>400+ pengguna di seluruh dunia</p>
					</div>
					<div className='h-5'></div>
					<div className='flex'>
						<input type="text" />
						<button className='border'>cari</button>
					</div>
				</div>
				<div>
					<img src="/img/hero-image.png" alt="" />
				</div>
			</div>
			<div className='h-10'></div>
    </div>
  )
}

export default Hero