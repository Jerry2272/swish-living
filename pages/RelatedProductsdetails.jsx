import React from 'react';
import { useParams } from 'react-router-dom';
import { productItem } from '../src/utils/bestsellingData'; 
import { relatedProducts } from '../src/utils/relatedProducts';

const ProductDetails = () => {
  const { id } = useParams();
  const product = productItem.find(p => p.id === parseInt(id));
  const related = relatedProducts.find(p => p.id === parseInt(id));

  if (!product) return <div className="p-6">Product not found</div>;
  if (!related) return <div className="p-6">Product not founded</div>;

  return (
    <>
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md grid grid-cols-2 gap-6">
      <img src={product.img || product.imgUrl} alt={product.name} className="w-full  rounded mb-6" />

      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

      <p className="text-sm text-gray-500 mb-1 capitalize">Category: {product.category || "Uncategorized"}</p>
      <p className="text-xl font-semibold text-green-700 mb-1">₦{product.price?.toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</p>
      {product.discount && (
        <p className="text-red-500 font-medium mb-1">Discount: {product.discount}% off</p>
      )}
      <p className="text-yellow-600 mb-2">⭐ Average Rating: {product.avgRating}</p>

      <p className="text-gray-700 mb-4">{product.shortDesc}</p>

      <div className="text-gray-800 mb-4">
        <h3 className="font-bold mb-1">Description:</h3>
        <p>{product.description}</p> 
      </div>
      </div>

      {product.reviews && (
        <div className="mt-4">
          <h3 className="font-bold text-lg mb-2">Customer Reviews</h3>
          <ul className="space-y-2">
            {product.reviews.map((review, idx) => (
              <li key={idx} className="border rounded p-2 bg-gray-50">
                <p className="text-sm">⭐ {review.rating}</p>
                <p className="text-sm text-gray-600 italic">{review.text}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

     
    </div>

         <div>
          <h1>Related Products</h1>
             <div className="grid grid-cols-3 gap-[30px] p-6 lg:px-[9em] mx-auto bg-white shadow-md rounded-md my-4">
           <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md grid grid-cols-2 gap-6">
      <img src={related.img || related.imgUrl} alt={product.name} className="w-full  rounded mb-6" />

      <div>
        <h1 className="text-3xl font-bold mb-2">{related.name}</h1>

      <p className="text-sm text-gray-500 mb-1 capitalize">Category: {related.category || "Uncategorized"}</p>
      <p className="text-xl font-semibold text-green-700 mb-1">₦{product.price?.toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</p>
      {related.discount && (
        <p className="text-red-500 font-medium mb-1">Discount: {related.discount}% off</p>
      )}
      <p className="text-yellow-600 mb-2">⭐ Average Rating: {related.avgRating}</p>

      <p className="text-gray-700 mb-4">{related.shortDesc}</p>

      <div className="text-gray-800 mb-4">
        <h3 className="font-bold mb-1">Description:</h3>
        <p>{related.description}</p> 
      </div>
      </div>

      {product.reviews && (
        <div className="mt-4">
          <h3 className="font-bold text-lg mb-2">Customer Reviews</h3>
          <ul className="space-y-2">
            {product.reviews.map((review, idx) => (
              <li key={idx} className="border rounded p-2 bg-gray-50">
                <p className="text-sm">⭐ {review.rating}</p>
                <p className="text-sm text-gray-600 italic">{review.text}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

     
    </div>
      </div>
         </div>
      </>
  );
};

export default ProductDetails;
