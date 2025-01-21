import React from 'react'

const Navitem = () => {
  return (
    <div>
        <ul className='flex items-center gap-6'>
            <li className='transition-all cursor-pointer hover:text-primary'>Home</li>
            <li className='transition-all cursor-pointer hover:text-primary'>AI</li>
            <li className='transition-all cursor-pointer hover:text-primary'>Payments</li>
            <li className='transition-all cursor-pointer hover:text-primary'>Banking</li>
            <li className='transition-all cursor-pointer hover:text-primary'>Crypto</li>
            <li className='transition-all cursor-pointer hover:text-primary'>wealth</li>
            <li className='transition-all cursor-pointer hover:text-primary'>International</li>
            <li className='transition-all cursor-pointer hover:text-primary'>Gallery</li>
            <li className='transition-all cursor-pointer hover:text-primary'>More</li>
        </ul>
    </div>
  )
}

export default Navitem