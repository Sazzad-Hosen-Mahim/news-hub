import React from 'react'
import logo from "../assets/images/logo.png"
import Navitem from './UI/Navitem'
import { IoSearchOutline } from "react-icons/io5";

const Navabr = () => {
  return (
    <div className='flex  items-center justify-between  2xl:px-[10%] 4xl:px-[10%] py-2'>
        {/* logo area  */}
        <div>
           <img className='w-16 h-16' src={logo} alt="logo" />
        </div>
        {/* nav items lis  */}
        <div>
            <Navitem />
        </div>
         {/* search-bar  */}
        <div className='flex items-center gap-2 p-2 rounded-full ring-1 ring-gray-200 focus-within:ring-2 focus-within:ring-pink-600'>
            <IoSearchOutline />
            <input className='outline-none ' type="text"  placeholder='Search' />
        </div>
    </div>
  )
}

export default Navabr