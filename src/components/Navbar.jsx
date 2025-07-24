import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/swish-logo.png' 


const Navbar = () => {
const navLink = [
    {id: 1, links: '/', navText: 'Home'},
    {id: 2, links: '/about', navText: 'About'},
    {id: 3, links: '/sho  p', navText: 'Shop'},
    {id: 4, links: '/gallery', navText: 'Gallery'},
    {id: 5, links: '/product', navText: 'Product'},
    {id: 6, links: '/cart', navText: 'Cart'},
    {id: 6, links: '/contact', navText: 'Contact'},

]
  return (
    <nav className='shadow bg-white flex justify-between items-center md:px-[8em] py-2'>
        <Link>
        <img src={logo}
        className='w-[200px]'
        alt="Swish Bedding logo" />
        </Link>
     <div className='flex gap-9 text-[1.2em] font-semibold text-gray-600'>
         {
       navLink.map((item , i) => (
            <Link to={item.links} key={i}>
          {item.navText}
        </Link>
       ))
      }
     </div>
    </nav>
  )
}

export default Navbar
