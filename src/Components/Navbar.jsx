import React from 'react'
import Logo from '../film-logo.jpg'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <img className="w-[50px] rounded-full" src={Logo} alt="film logo" />
      <Link to='/' className='text-blue-500 text-3xl font-bold'>Movies</Link>
      <Link to='/watchlist' className='text-blue-500 text-3xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar
