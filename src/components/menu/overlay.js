import React from 'react'
import injected from '../../injected.json'
import Link from 'next/link'
import { useTranslate } from '../../hooks/useTranslate'
import { useRouter } from 'next/navigation'

export default function MenuOverlay({ navbarOpen, setNavbarOpen }) {
  const { t } = useTranslate()
  const { push } = useRouter()
  return (
    <div
      className={`w-full min-h-[800px] xl:min-h-screen overflow-hidden flex justify-center bg-primary-900 text-white transform delay-100 transition-all duration-300 ${
        navbarOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='max-w-screen-xl 2xl:max-w-screen-2xl mx-auto text-lg md:text-3xl grid gap-2 items-center'>
        {injected.pages.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            onClick={(e) => {
              e.preventDefault()
              setNavbarOpen(false)
              push(item.link)
            }}
          >
            <span className='hover:underline hover:underline-offset-8 transition-all'>
              {t(item.title)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
