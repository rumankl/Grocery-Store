import { Button } from '@material-tailwind/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  return (

    // <div className='bg-gray-50 flex justify-between py-4 px-10 text-slate-700  font-medium tracking-wide items-baseline z-50 sticky top-0  mmd:text-orange-400  mmd:flex-col mmd:items-center '>
    <div className=' flex justify-between py-4 px-10 text-slate-700  font-medium tracking-wide items-baseline z-50 sticky top-4  mmd:text-orange-400  mmd:flex-col mmd:items-center '>
      <NavLink to={'/'}> <h1 className='text-green-800 text-3xl'>Grocery <span className='text-amber-400'>Store</span> </h1> </NavLink>
      <nav className='space-x-4  text-[20px]
       '>
        <NavLink className='ht' to={'/about-page'}>About</NavLink>
        <NavLink className='ht' to={'/product-page'}>Product</NavLink>
        <NavLink className='ht' to={'/news-page'}>News</NavLink>
        <NavLink className='ht' to={'/contact-page'}>Contact</NavLink>
      </nav>

      <div>
        <Button color='green' size="sm" >Shop Now</Button>
      </div>

    </div>
  )
}

export default Header
