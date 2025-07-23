import React from 'react';
import { useParams } from 'react-router-dom';
import { galleryProduct } from '../src/utils/galleryProjects';

const GalleryDetails = () => {
  const { id } = useParams();
  const product = galleryProduct.find((item) => item.id === parseInt(id));

  if (!product) return <div className="p-6">Product not found</div>;

  return (
    <section className=" p-6 max-w-5xl mx-auto">
      <img src={product.img} alt={product.alt} className="w-full max-h-[500px] object-cover rounded mb-6" />
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-gray-700 text-lg mb-2">{product.price}</p>
      <p className="text-gray-600">{product.description}</p>
      <p className="mt-4 text-sm text-gray-400">Category: {product.category}</p>
      <a href={``}></a>
    </section>
  );
};

export default GalleryDetails;
