import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaCartPlus, FaTrashAlt, FaWhatsapp } from 'react-icons/fa';

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
    <div className="bg-white border border-gray-200 ml-[1em] my-[3em] md:mx-1 shadow-lg rounded-2xl overflow-hidden flex flex-col transition hover:scale-97 duration-300">
      <div
        className="cursor-pointer relative"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-60 object-cover"
        />
        <span className="absolute top-2 left-2 bg-[#7e563c] text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
          ₦{product.price?.toLocaleString() || '—'}
        </span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2 mb-2">
          {product.name}
        </h3>
        <span className="absolute top-12 left-2 bg-white text-gray-800 text-xs font-medium px-2 py-0.5 rounded shadow">
  Qty: {product.quantity}
</span>

        {product.star && (
          <div className="flex items-center text-yellow-500 text-sm mb-3">
            {Array.from({ length: parseInt(product.star) }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        )}

        <div className="flex gap-2 mb-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-1 bg-[#7e563c] text-white px-3 py-2 rounded-lg text-sm hover:bg-[#725949] transition"
          >
            <FaCartPlus />
            Add
          </button>

          <button
            onClick={handleRemoveFromCart}
            className="flex items-center justify-center gap-1 border border-red-500 text-red-500 px-3 py-2 rounded-lg text-sm hover:bg-red-50 transition"
          >
            <FaTrashAlt />
            Remove
          </button>
        </div>

        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            `🛍️ *${product.name}*\nCheck it out: ${window.location.origin}/product/${product.id}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 text-green-700 text-sm hover:underline"
        >
          <FaWhatsapp />
          Share on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
