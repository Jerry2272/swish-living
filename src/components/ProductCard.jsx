import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';
import { FaWhatsapp, FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
    toast.error(`${product.name} removed from cart!`);
  };


  return (
    <div className="bg-white rounded-1xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col mx-1">
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-1 justify-between">
        <h3 className="text-xl font-semibold text-gray-900 mb-1 line-clamp-2">
          {product.name}
        </h3>

        {product.star && (
          <div className="text-yellow-500 flex items-center gap-1 text-sm mb-1">
            <FaStar /> <span>{product.star}</span>
          </div>
        )}

        <p className="text-lg font-bold text-green-700 mt-2">
          ₦{product.price || '—'}
        </p>

        <div className="mt-4 flex flex-col gap-2">
          <button
            className="bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            onClick={handleAddToCart}
          >
            {product.addCart || 'Add to Cart'}
          </button>

          <button
            className="border border-red-500 text-red-500 py-2 rounded-md hover:bg-red-50 transition"
            onClick={handleRemoveFromCart}
          >
            {product.removeCart || 'Remove'}
          </button> 
         <a
  className="flex justify-center items-center gap-2 text-green-600 text-sm mt-2 hover:underline"
  href={`https://wa.me/?text=${encodeURIComponent(
    `Hello! Check out this product: ${product.name} - ${window.location.href}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
            <FaWhatsapp />
            Share on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
