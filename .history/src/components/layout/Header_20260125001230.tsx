import Image from 'next/image'
import React from 'react'
import Logo from '/public/logo.jpeg'

const Header = () => {
  return (
   <header className='flex justify-between max-w-screen-xl mx-auto '>
    <div>
        <Image
        src={}
        alt=''
        />
    </div>
    <ul className='flex'>
      <li>Home</li>
      <li>Courses</li>
    </ul>
   </header>
  )
}

export default Header
