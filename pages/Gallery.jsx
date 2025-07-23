import React from 'react';
import { Link } from 'react-router-dom';
import { galleryProduct } from '../src/utils/galleryProjects';

const Gallery = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Projects Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryProduct.map((item) => (
          <Link
            to={`/gallery/${item.id}`}
            key={item.id}
            className="block group"
          >
            <div className="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-center">{item.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
