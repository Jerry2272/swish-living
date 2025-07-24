import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Swish Bedding</h2>
          <p className="text-sm text-gray-300">
            We bring elegance and comfort to your home with quality bedding, interior decor, and fast delivery services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <span>+234 800 000 0000</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <span>info@swishbedding.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-300 text-xl">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Swish Bedding. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
