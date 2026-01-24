import React from 'react'

const Header = () => {
  return (
   <header className='flex justify-between'>
    <div>
        <h2 className='y'>Panaversity</h2>
    </div>
    <ul className='flex'>
      <li>Home</li>
      <li>Courses</li>
    </ul>
   </header>
  )
}

export default Header
