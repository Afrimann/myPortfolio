import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props{
  openNav: ()=> void
}
const Nav = ({openNav}:Props) => {
  return (
    <div className='top-0 z-[10000] fixed bg-[#141c27] shadow-md w-[100%] h-[12vh]'>
      <div className='flex justify-between items-center mx-auto w-[80%] h-[100%]'>
        <h1 className='flex-[0.6] font-bold text-[25px] text-white cursor-pointer'>
          Peter
          <span className='text-yellow-300'>Omohh</span>
        </h1>
        <a href='#home' className='nav-link'>Home</a>
        <a href='#services' className='nav-link'>Services</a>
        <a href='#about' className='nav-link'>About</a>
        <a href='#project' className='nav-link'>Project</a>
        <a href='#blog' className='nav-link'>Blog</a>
        <a href='#contact' className='nav-link'>Contact</a>
        <div onClick={openNav}>
          <Bars3Icon className='md:hidden w-[2rem] h-[2rem] text-yellow-300 cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Nav
