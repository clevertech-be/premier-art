import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TeamCard({ image, description, firstName, lastName, link = '/about' }) {
  return (
    <div className='text-primary-900 flex gap-4 flex-col justify-start font-normal'>
      <Image width={200} height={200} sizes='100vw' alt='Team member avatar' src={image} />
      <div className='text-2xl font-bold'>
        {firstName} {lastName}
      </div>
      <div className='text-base'>{description}</div>
      <Link
        href={link}
        className='text-sm font-bold hover:font-bold hover:underline-offset-8 hover:underline'
      >
        Follow on Linkedin
      </Link>
    </div>
  )
}
