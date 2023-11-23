import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Burger from './svg/burger'

export default function Header({ navbarOpen, setNavbarOpen }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <nav
      className={classNames(
        navbarOpen ? 'bg-primary-900 text-white' : 'bg-white text-primary-900',
        'z-50 sticky top-0 mx-auto overflow-auto transition-all duration-300 ease-in-out py-10',
      )}
    >
      <div
        className={`max-w-screen-xl 2xl:max-w-screen-2xl px-6 md:px-16 flex flex-row gap-5 items-center justify-between mx-auto text-sm font-bold leading-normal`}
      >
        <Link
          href={'/'}
          className='relative w-5 h-5 cursor-pointer'
          onClick={(e) => {
            e.preventDefault()
            setNavbarOpen(!navbarOpen)
          }}
        >
          <Burger navbarOpen={navbarOpen} />
        </Link>
        <Link href={'/'} className=''>
          <Image
            width={200}
            height={40}
            className='w-40 md:w-96 h-16 cursor-pointer'
            src='/logo.svg'
            alt={`Logo`}
            style={{
              filter: navbarOpen ? 'invert(1)' : 'invert(0)',
            }}
          />
        </Link>
        <div></div>
      </div>
    </nav>
  )
}
