import React from 'react';
import aboutImage from '../src/assets/bedlings3.jpg'; 
import aboutImg from '../src/assets/bedlings2.jpg'; 
import { FaStar, FaCouch, FaTruck } from 'react-icons/fa';

const About = () => {
  return (
    <div className=" ">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 text-center h-[60vh]">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${aboutImage})` }}></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">About Swish Living</h1>
          <p className="text-lg">Elegant Comfort, Delivered to Your Doorstep</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-[4em] px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Swish Livng is a premium home decor and bedding brand based in Nigeria. We specialize in providing luxurious and stylish bedding sets, duvets, throw pillows, curtains, and other accessories that turn your house into a home.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to bring beauty and comfort into every bedroom, living room, and space you care about—without compromising quality or affordability.
          </p>
        </div>

        <img src={aboutImg} alt="Swish Bedding About" className="rounded-xl shadow-md w-full h-auto object-cover" />
      </section>

      {/* Values Section */}
    <section className="bg-black py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-12 text-white">Why Choose Swish Living?</h2>
    <div className="grid md:grid-cols-3 gap-10">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <FaStar className="text-[#00843D] text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold mb-2">Elegant Designs</h3>
        <p className="text-gray-600">Timeless and trendy collections that match your taste, elevate your home, and express your personality.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <FaCouch className="text-[#00843D] text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold mb-2">Premium Comfort</h3>
        <p className="text-gray-600">Every piece is crafted from quality materials for softness, durability, and ultimate relaxation.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <FaTruck className="text-[#00843D] text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold mb-2">Swift Nationwide Delivery</h3>
        <p className="text-gray-600">From our store to your space—get your items quickly, wherever you are in Nigeria.</p>
      </div>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-10 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Redefine Your Space?</h3>
        <a
          href="/shop"
          className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
        >
          Shop Now
        </a>
      </section>
    </div>
  );
};

export default About;
