import React from 'react';
import { Link } from 'react-router-dom';
import { galleryProduct } from '../src/utils/galleryProjects';

const Gallery = () => {
  return (
    <section className="px-4 py-16 mx-auto max-w-6xl">
      <h2 className="text-3xl font-semibold text-center mb-10 text-black">
        Our Projects Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryProduct.map((item) => (
          <Link
            to={`/gallery/${item.id}`}
            key={item.id}
            className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-center text-gray-800 group-hover:text-[#000000]">
                {item.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
