import Image from 'next/image'
import React from 'react'

export default function QuoteCard({ source, quote, image }) {
  return (
    <div className='grid md:grid-cols-3 justify-between my-20'>
      <Image
        loading='lazy'
        width={500}
        height={500}
        sizes='100vw'
        alt='Quote illustration'
        src={image}
      />
      <div className='bg-primary-900 text-white p-10 flex flex-col gap-5 items-start justify-center md:col-span-2'>
        <div className='text-lg font-bold'>{quote}</div>
        <div className='text-base font-normal'>{source}</div>
      </div>
    </div>
  )
}
