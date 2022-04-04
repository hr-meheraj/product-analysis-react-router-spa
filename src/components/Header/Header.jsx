import React from 'react'
import {NavLink} from 'react-router-dom' 
function Header() {
    return (
        <nav className='bg:neutral-50 flex justify-center items-center gap-[15px] py-2 shadow-sm font-poppins'>
            <NavLink className={({isActive}) => isActive ? "font-semibold text-rose-700" : "hover:text-pink-600"}to='/'>HOME</NavLink>
            <NavLink className={({isActive}) => isActive ? "font-semibold text-rose-700" : "hover:text-pink-600"}to='/reviews'>REVIEWS</NavLink>
            <NavLink className={({isActive}) => isActive ? "font-semibold text-rose-700" : "hover:text-pink-600"}to='/blogs'>BLOGS</NavLink>
            <NavLink className={({isActive}) => isActive ? "font-semibold text-rose-700" : "hover:text-pink-600"}to='/dashboard'>DASHBOARD</NavLink>
            <NavLink className={({isActive}) => isActive ? "font-semibold text-rose-700" : "hover:text-pink-600"}to='/about'>ABOUT</NavLink>

        </nav>
    )
}

export default Header
