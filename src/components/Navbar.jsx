import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/swishLiving-logo.png'
import { FaCartPlus } from 'react-icons/fa'
import { MdMenu, MdClose } from 'react-icons/md'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = [
    { id: 1, links: '/', navText: 'Home' },
    { id: 2, links: '/about', navText: 'About' },
    { id: 3, links: '/shop', navText: 'Shop' },
    { id: 4, links: '/gallery', navText: 'Gallery' },
    { id: 5, links: '/product', navText: 'Product' },
    { id: 6, links: '/cart', navText: <FaCartPlus /> },
    { id: 7, links: '/contact', navText: 'Contact'},
  ]

  return (
    <nav className="shadow bg-white flex justify-between items-center md:px-[8em] py-2 px-[2em] relative">
      <Link to="/">
        <img
          src={logo}
          className="md:h-[130px] h-[100px]"
          alt="Swish living logo"
        />
      </Link>

      {/* Desktop Nav */}
      <div className="lg:flex md:flex gap-10 text-[1.2em] font-semibold text-gray-600 hidden">
        {navLink.map((item) => (
          <Link to={item.links} key={item.id}>
            {item.navText}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden md:hidden block text-3xl text-[#7e563c]">
        {menuOpen ? (
          <MdClose onClick={() => setMenuOpen(false)} />
        ) : (
          <MdMenu onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className="absolute top-[100%] right-0 bg-white w-full flex flex-col items-center gap-6 py-6 z-10 shadow-md text-[1.2em] font-semibold text-gray-600 lg:hidden md:hidden">
          {navLink.map((item) => (
            <Link
              to={item.links}
              key={item.id}
              onClick={() => setMenuOpen(false)}
            >
              {item.navText}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
