import React from 'react';
import tvConsole from '../assets/bedsheet-product2.jpg';
import curtain1 from '../assets/curtian1.jpg';
import tvStand from '../assets/tv-stand.jpg';

const Explore = () => {
  return (
    <section className="grid md:grid-cols-2 gap-10 px-6 py-16 items-center max-w-7xl md:mx-[5em]">
      {/* Image Section */}
      <div className="grid grid-cols-2 gap-3 mx-4">
        <img
          src={tvConsole}
          alt="Swish luxury bedding"
          className="rounded-xl object-cover w-full h-80 shadow-lg"
        />
        <div className="flex flex-col gap-4">
          <img
            src={curtain1}
            alt="Elegant interior design"
            className="rounded-xl object-cover w-full h-36 shadow-md"
          />
          <img
            src={tvStand}
            alt="Luxury scent diffusers"
            className="rounded-xl object-cover w-full h-36 shadow-md"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-gray-900">
        <h2 className="text-4xl font-semibold mb-5">Explore Swish Living</h2>
        <p className="mb-6 text-[1.05rem] leading-relaxed">
          Swish Living and Interiors is a soft furnishing, premium lifestyle and home essentials
          brand. We offer high-quality beddings, comfortable pillows, luxury scent diffusers,
          renovations, interior design, furnishing, and finishings. Our services cater to both
          individuals and hospitality businesses seeking the perfect blend of comfort, elegance, and ambiance.
        </p>
        <ul className="list-disc pl-6 text-base text-gray-800 space-y-2 mb-6">
          <li>Premium-quality home essentials</li>
          <li>Tailored furnishing and finishings</li>
          <li>Professional renovations and design solutions</li>
        </ul>
        <a
          href="/gallery"
          className="inline-flex items-center gap-3 rounded-lg bg-[#7e563c] 
)
 text-white px-6 py-3 font-medium shadow-md hover:shadow-lg transition"
        >
          Explore Now
        </a>
      </div>
    </section>
  );
};

export default Explore;
