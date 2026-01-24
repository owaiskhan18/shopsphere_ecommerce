import Image from 'next/image'
import React from 'react'
import Logo from '../../assests/images/logo.jpeg'
import Link from 'next/link'

const Header = () => {
  return (
   <header className='flex justify-between max-w-screen-xl mx-auto items-center px-4 py-1 bg-white'>
    <div>
        <Image
        src={Logo}
        alt='Logo'
        className='h-20 w-20 rounded-full'
        />
    </div>
    <ul className='flex gap-x-3.5'>
      <Link href={'/'}>
      <li>Home</li>
      </Link>
      <Link href={'/shop'}>
      <li>Shop</li>
      </Link>
      <Li
      <li>About</li>
      <li>Contact</li>
    </ul>
   </header>
  )
}

export default Header
