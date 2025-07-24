import React from 'react';
import { Link } from 'react-router-dom';

const SpecialBanner = () => {
  return (
    <section className="bg-black py-12 px-6 md:px-16 text-center mx-auto mt-[40px]">
      <div className="max-w-4xl mx-auto">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
            Special Discount Just For You!
          </h2>
          <p className="text-lg text-white mb-6">
            Elevate your space with premium bedding, luxurious scent diffusers, and elegant furnishings.
            Enjoy up to <span className="font-semibold text-[#cc5c00]">25% OFF</span> on selected items this week only.
          </p>
          <Link
            to="/shop"
           className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[rgba(0,0,0, 0.65)] to-[#d5bfa7]
)
 text-white px-6 py-3 font-medium shadow-md hover:shadow-lg transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Image Section */}
        {/* <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600585154356-596af9009a4b"
            alt="Luxury Bedding Discount"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <p className="text-white text-2xl font-semibold">Limited Time Offer</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SpecialBanner;
