import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryProduct } from '../src/utils/galleryProjects';

const GalleryDetails = () => {
  const { id } = useParams();
  const product = galleryProduct.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-6 text-center text-gray-500">
        <h2 className="text-xl font-semibold">❌ Product not found</h2>
        <Link to="/gallery" className="text-blue-500 hover:underline mt-2 block">← Back to Gallery</Link>
      </div>
    );
  }

  return (
    <section className="p-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <img
          src={product.img}
          alt={product.alt || product.name}
          className="w-full max-h-[500px] object-cover rounded-xl shadow-md"
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
        <p className="text-xl text-green-600 font-semibold">
          {typeof product.price === 'number' ? `₦${product.price.toLocaleString()}` : product.price}
        </p>
        <p className="text-gray-700 text-lg">{product.description}</p>
        <p className="text-sm text-gray-500">Category: <span className="font-medium">{product.category}</span></p>
      </div>

      <Link
        to="/gallery"
        className="inline-block mt-6 text-white bg-[#63412b] hover:bg-[#463b34] px-4 py-2 rounded shadow transition"
      >
        ← Back to Gallery
      </Link>
    </section>
  );
};

export default GalleryDetails;
