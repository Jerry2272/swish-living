import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productItem } from '../src/utils/bestsellingData';
import { relatedProducts } from '../src/utils/relatedProducts';
import ProductCard from '../src/components/ProductCard'; 
import { featuredProductdata } from '../src/utils/featuredProductdata';

const ProductDetails = () => {
  const { id } = useParams();
  const allProducts = [...productItem, ...relatedProducts, ...featuredProductdata];
  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-6 text-center text-gray-500">
        <h2 className="text-xl font-semibold">❌ Product not found</h2>
        <Link to="/" className="text-blue-500 hover:underline mt-2 block">← Go to Home</Link>
      </div>
    );
  }

  const shareLink = `https://wa.me/?text=${encodeURIComponent(
    `Hello! Check out this product from Swish Living: ${window.location.href}`
  )}`;

  return (
    <>
      {/* Product Details */}
      <div className="p-6 max-w-6xl mx-auto bg-white shadow-md rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <img
          src={product.img || product.imgUrl}
          alt={product.name}
          className="w-full rounded-xl object-cover shadow"
        />

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-sm text-gray-500 capitalize">Category: {product.category || "Uncategorized"}</p>
          <p className="text-xl font-semibold text-black">
            {product.price?.toLocaleString("en-NG", { style: "currency", currency: "NGN" })}
          </p>
          {product.discount && (
            <p className="text-red-500 font-medium">Discount: {product.discount}% off</p>
          )}
          <p className="text-yellow-600">⭐ Average Rating: {product.avgRating}</p>
          <p className="text-gray-700">{product.shortDesc}</p>

          <div>
            <h3 className="font-bold mb-1">Description:</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <Link
            to={shareLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-white  bg-[#7e563c] hover:bg-[#3b2f27] px-4 py-2 rounded shadow transition"
          >
            📲 Share on WhatsApp
          </Link>
        </div>
      </div>

      {/* Customer Reviews */}
      {product.reviews && (
        <div className="max-w-6xl mx-auto p-6 mt-4 bg-white rounded-xl shadow">
          <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
          <ul className="space-y-3">
            {product.reviews.map((review, idx) => (
              <li key={idx} className="border rounded-md p-3 bg-gray-50">
                <p className="text-sm text-yellow-600">⭐ {review.rating}</p>
                <p className="text-sm text-gray-600 italic">"{review.text}"</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* All Products */}
      <div className="max-w-6xl mx-auto mt-10 px-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Explore More Products.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productItem.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-6xl mx-auto mt-10 px-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.map((related) => (
            <ProductCard key={related.id} product={related} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
