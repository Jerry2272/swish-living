import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/swishLiving-logo.png' 
import { FaCartPlus } from 'react-icons/fa'


const Navbar = () => {
const navLink = [
    {id: 1, links: '/', navText: 'Home'},
    {id: 2, links: '/about', navText: 'About'},
    {id: 3, links: '/shop', navText: 'Shop'},
    {id: 4, links: '/gallery', navText: 'Gallery'},
    {id: 5, links: '/product', navText: 'Product'},
    {id: 6, links: '/cart', navText: <FaCartPlus />},
    {id: 6, links: '/contact', navText: 'Contact'},

]
  return (
    <nav className='shadow bg-white flex justify-between items-center md:px-[8em] py-2 px-[2em]'>
        <Link>
        <img src={logo}
        className='md:h-[130px] h-[100px]'
        alt="Swish living logo" />
        </Link>
     <div className='lg:flex md:flex gap-10 text-[1.2em] font-semibold text-gray-600 hidden'>
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
