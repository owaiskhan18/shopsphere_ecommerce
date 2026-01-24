import Image from 'next/image'
import React from 'react'
import Logo from '/p'

const Header = () => {
  return (
   <header className='flex justify-between max-w-screen-xl mx-auto '>
    <div>
        <Image
        src={Logo}
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
