import React from 'react'

const Header = () => {
  return (
   <header className='flex justify-between max-w-screen-xl'>
    <div>
        <h2 className='text-xl'>Panaversity</h2>
    </div>
    <ul className='flex'>
      <li>Home</li>
      <li>Courses</li>
    </ul>
   </header>
  )
}

export default Header
