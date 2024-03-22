
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='shadow-md hover:shadow-lg transition-shadow'>
      <nav className='flex justify-between items-center h-20 font-serif container mx-auto px-8'>
        <Link to={'/'}>
          <div>
            <h1 className='text-blue-900 font-semibold md:text-2xl sm:text-lg tracking-wider word-spacing-9'>My SHOPPING CART</h1>
          </div>
        </Link>
        
          <ul className='flex justify-around items-center tracking-wide space-x-6 text-blue-700 font-semibold hover:text-blue-500'>
            <Link to={'/'}>
            <li>Home</li>
            </Link>
            <Link to={'/cart'}>
            <li>Cart</li>
            </Link>
            
          </ul>
      </nav>
    </div>
  )
}

export default Navbar