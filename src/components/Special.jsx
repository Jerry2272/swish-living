import React from 'react';
import { Link } from 'react-router-dom';
import specialBg from '../assets/discountBg.jpg';

const SpecialBanner = () => {
  return (
    <section
      className="py-12 px-6 md:px-16 text-center md:mx-[3em] lg:mx-[3em] mx-[1em] mt-[40px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${specialBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '1rem', // optional
      }}
    >
      <div className="max-w-4xl mx-auto text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Special Discount Just For You!
        </h2>
        <p className="text-lg mb-6">
          Elevate your space with premium bedding, luxurious scent diffusers, and elegant furnishings.
          Enjoy up to <span className="font-semibold text-[#cc5c00]">25% OFF</span> on selected items this week only.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-3 rounded-lg bg-[#7e563c] text-white px-6 py-3 font-medium shadow-md hover:shadow-lg transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default SpecialBanner;
