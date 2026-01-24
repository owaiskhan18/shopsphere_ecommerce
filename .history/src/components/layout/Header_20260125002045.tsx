import Image from 'next/image'
import React from 'react'
import Logo from '../../assests/images/logo.jpeg'

const Header = () => {
  return (
   <header className='flex justify-between max-w-screen-xl mx-auto '>
    <div>
        <Image
        src={Logo}
        alt='Logo'
        className='h-24 w-24'
        />
    </div>
    <ul className='flex'>
      <li>Home</li>
      <li>Shop</li>
      <li>Categories</li>
    </ul>
   </header>
  )
}

export default Header
