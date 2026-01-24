import Image from 'next/image'
import React from 'react'
import Logo from '../../assests/images/logo.jpeg'
import Link from 'next/link'
import Wrapper from '../shared/Wrapper'

const Header = () => {
  return (
   <Wrapper>
    <header className='flex justify-between items-center bg-white'>
    <div>
        <Link href={'/'}>
        <Image
        src={Logo}
        alt='Logo'
        className='h-20 w-20 rounded-full cursor-pointer'
        />
        </Link>
    </div>
    <ul className='flex gap-x-3.5 text-[#4f46e5]'>
      <Link href={'/'}>
      <li>Home</li>
      </Link>
      <Link href={'/shop'}>
      <li>Shop</li>
      </Link>
      <Link href={'/categories'}>
      <li>Categories</li>
      </Link>
      <Link href={'/about'}>
      <li>About</li>
      </Link>
      <Link href={'/contact'}>
      <li>Contact</li>
      </Link>
    </ul>
   </header>
   </Wrapper>
  )
}

export default Header
