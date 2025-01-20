import React from 'react'

const Navitem = () => {
  return (
    <div>
        <ul className='flex items-center gap-6'>
            <li className='transition-all cursor-pointer  hover:text-pink-600'>Home</li>
            <li className='transition-all cursor-pointer  hover:text-pink-600'>AI</li>
            <li className='transition-all cursor-pointer  hover:text-pink-600'>Payments</li>
            <li className='transition-all cursor-pointer  hover:text-pink-600'>Banking</li>
            <li className='transition-all cursor-pointer  hover:text-pink-600'>Crypto</li>
            <li className='transition-all cursor-pointer  hover:text-pink-600'>wealth</li>
            <li className='transition-all cursor-pointer  hover:text-pink-600'>International</li>
            <li className='transition-all cursor-pointer  hover:text-pink-600'>Gallery</li>
            <li className='transition-all cursor-pointer  hover:text-pink-600'>More</li>
        </ul>
    </div>
  )
}

export default Navitem