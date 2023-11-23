import Image from 'next/image'
import React from 'react'

export default function QuoteCard({ source, quote, image }) {
  return (
    <div className='flex flex-col md:flex-row gap-0 justify-between my-20'>
      <Image width={500} height={300} alt='Quote illustration' src={image} />
      <div className='bg-primary-900 text-white p-10 flex flex-col gap-5 items-start justify-center'>
        <div className='text-lg xl:text-xl font-semibold'>{quote}</div>
        <div className='text-base font-normal'>{source}</div>
      </div>
    </div>
  )
}
