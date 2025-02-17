import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props{
    nav: boolean
    closeNav: ()=> void
}
const MobileNav = ({nav,closeNav}:Props) => {
    const navAnimation = nav? 'translate-x-0' : 'translate-x-[-100%]'

  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-[#09101a]`}>
      <div className='flex flex-col justify-center items-center h-[100vh] 2-[100vw]'>
        <a href='#home' onClick={closeNav} className='nav-link-mobile'>HOME</a>
        <a href='#services' onClick={closeNav} className='nav-link-mobile'>SERVICES</a>
        <a href='#about' onClick={closeNav} className='nav-link-mobile'>ABOUT</a>
        <a href='#project' onClick={closeNav} className='nav-link-mobile'>PROJECT</a>
        <a href='#blog' onClick={closeNav} className='nav-link-mobile'>BLOG</a>
        <a href='#footer' onClick={closeNav} className='nav-link-mobile'>CONTACT</a>
      </div>
      <div onClick={closeNav} className='top-[2rem] right-[2rem] z-[100000000] absolute w-[2rem] h-[2rem] text-yellow-400 cursor-pointer'>
        <XMarkIcon/>
      </div>
    </div>
  )
}

export default MobileNav
