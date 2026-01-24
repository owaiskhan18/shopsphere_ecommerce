import Image from 'next/image'
import React from 'react'
import Logo from '../../assests/images/logo.jpeg'

const Header = () => {
  return (
   <header className='flex justify-between max-w-screen-xl mx-auto items-center px-4 py-0.5 bg-red-600'>
    <div>
        <Image
        src={Logo}
        alt='Logo'
        className='h-20 w-20 rounded-full'
        />
    </div>
    <ul className='flex gap-x-3.5'>
      <li>Home</li>
      <li>Shop</li>
      <li>Categories</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
   </header>
  )
}

export default Header
