import React from 'react'
import { Button2, InvertedButton } from '../button'

export default function AboutCard({
  title,
  description,
  mainLink,
  mainLinkText,
  secondaryLink,
  secondaryLinkText,
}) {
  return (
    <div className={`bg-white flex gap-3 flex-col justify-between items-left md:p-12`}>
      <div className='text-primary-900 flex flex-col flex-wrap items-start gap-3'>
        <h2 className='text-xl md:text-2xl font-bold max-w-2xl'>{title}</h2>
        <div className='text-base max-w-xl'>{description}</div>
      </div>
      <div className='flex flex-row justify-start gap-2'>
        {mainLink && mainLinkText && <InvertedButton message={mainLinkText} link={mainLink} />}
        {secondaryLink && secondaryLinkText && (
          <Button2 message={secondaryLinkText} link={secondaryLink} />
        )}
      </div>
    </div>
  )
}
