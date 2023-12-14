import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center  !py-10 h-10 px-10 bg-[#FFF7ED]'>
      <Link to="/" className='text-black text-[25.353px] font-black'>#VANLIFE</Link>
      <div className=''>
        <nav className='flex'>
        <NavLink to='/host'  className={({isActive}) => isActive?"underline mx-5 text-[16px] font-semibold":"text-[#4D4D4D] mx-5 text-[16px] font-semibold" }>Host</NavLink>
        <NavLink to='/about'  className={({isActive}) => isActive?"underline mx-5 text-[16px] font-semibold":"text-[#4D4D4D] mx-5 text-[16px] font-semibold" }>About</NavLink>
        <NavLink to='/van' className={({isActive}) => isActive?"underline mx-5 text-[16px] font-semibold":"text-[#4D4D4D] mx-5 text-[16px] font-semibold" }>Vans</NavLink>
        <NavLink to='/login' className={({isActive}) => isActive?"underline mx-5 text-[16px] font-semibold":"text-[#4D4D4D] mx-5 text-[16px] font-semibold" }> <img 
                        src="/images/man.png" 
                        className="w-5"
                    /></NavLink>
        
        
        </nav>
      </div>
    </div>
  )
}

export default Header