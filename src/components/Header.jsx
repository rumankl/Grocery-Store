import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  // const handleScrollToSection = (sectionId) => {
  //   // document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' }); ------OR------
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  return (
    <div className='bg-gray-50 flex justify-between py-4 px-10 text-slate-700  font-medium tracking-wide items-baseline z-50 sticky top-0  mmd:text-orange-400  mmd:flex-col mmd:items-center '>
      <NavLink to={'/'}> <h1 className='  '>FIETISH TECHNOLOGY</h1> </NavLink>
      {/* <h1>WeboLogo</h1>  */}
      <nav className='space-x-4 '>
        {/* <a className='ht' href="#about" onClick={() => handleScrollToSection('about')}> About</a>  */}
        <NavLink className='ht' to={'/about-page'}>About</NavLink>
        <NavLink className='ht' to={'/contact-page'}>Contact</NavLink>
        <NavLink className='ht' to={'/Project-page'}>Project</NavLink>
        <NavLink className='ht' to={'/Careers-page'}>Careers</NavLink>
      </nav>
    </div>
  )
}

export default Header
