import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaCartPlus, FaTrashAlt, FaWhatsapp } from 'react-icons/fa';

const selectColor = [
  { id: 1, text: 'Red' },
  { id: 2, text: 'Black' },
  { id: 3, text: 'Green' }
];

const selectSize = [
  { id: 1, text: '3/6', price: 500 },
  { id: 2, text: '4/6', price: 3000 },
  { id: 3, text: '6/6', price: 3500 },
  { id: 4, text: '6/7', price: 4000 },
  { id: 5, text: '7/7', price: 4500 },
  { id: 6, text: '8/8', price: 5000 },
];

const ProductCard = ({ product }) => {
  const [cartAdded, setCartAdded] = useState(0);
  const [modal, showModal] = useState(false);
  const [colorSelected, setSelectedColor] = useState('');
  const [sizeSelected, setSelectedSize] = useState('');
  const [priceUpdated, setPriceupdated] = useState(product.price);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!colorSelected || !sizeSelected) {
      toast.error('Please select both size and color');
      return;
    }

 const productWithOptions = {
  ...product,
  color: colorSelected,
  size: sizeSelected,
  price: priceUpdated, // ✅ add this line
};


    dispatch(addToCart(productWithOptions));
    toast.success(`${product.name} (${sizeSelected}, ${colorSelected}) added to cart!`);
    setCartAdded(cartAdded + 1);
    showModal(false);
    setSelectedColor('');
    setSelectedSize('');
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
    toast.error(`${product.name} removed from cart!`);
    setCartAdded(cartAdded > 0 ? cartAdded - 1 : 0);
  };

  return (
    <div className="bg-white border relative border-gray-200 ml-[1em] my-[3em] md:mx-1 shadow-lg rounded-2xl overflow-hidden flex flex-col transition hover:scale-97 duration-300">
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
          ₦{priceUpdated?.toLocaleString() || '—'}
        </span>
        <span className="absolute top-12 left-2 bg-white text-gray-800 text-xs font-medium px-2 py-0.5 rounded shadow">
          Qty: {product.quantity}
        </span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2 mb-2">
          {product.name}
        </h3>

        {product.star && (
          <div className="flex items-center text-yellow-500 text-sm mb-3">
            {Array.from({ length: parseInt(product.star) }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        )}

        <div className="flex gap-2 mb-2">
          <button
            onClick={() => showModal(true)}
            className="flex-1 flex items-center justify-center gap-1 bg-[#7e563c] text-white px-3 py-2 rounded-lg text-sm hover:bg-[#725949] transition cursor-pointer"
          >
            <FaCartPlus />
            Add
          </button>

          <button
            onClick={handleRemoveFromCart}
            className="flex items-center justify-center gap-1 border border-red-500 text-red-500 px-3 py-2 rounded-lg text-sm hover:bg-red-50 transition cursor-pointer"
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

        <div className="text-xs text-gray-600 mt-2">
          <span>Color: {colorSelected || '—'}</span> | <span>Size: {sizeSelected || '—'}</span>
        </div>
        <h2 className="text-black mt-1 text-sm">Cart: {cartAdded}</h2>
      </div>

      {modal && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-xl shadow-md w-[90%] max-w-sm">
            <h3 className="text-lg font-bold mb-4 text-center">Select Options</h3>

            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">Color:</label>
              <select
                value={colorSelected}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">-- Choose Color --</option>
                {selectColor.map((item) => (
                  <option value={item.text} key={item.id}>
                    {item.text}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">Size:</label>
             <select
  value={sizeSelected}
  onChange={(e) => {
    const selected = selectSize.find((item) => item.text === e.target.value);
    setSelectedSize(selected.text);
    setPriceupdated(selected.price);
  }}
  className="w-full p-2 border rounded"
>
  <option value="">-- Choose Size --</option>
  {selectSize.map((item) => (
    <option value={item.text} key={item.id}>
      {item.text}
    </option>
  ))}
</select>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-[#7e563c] text-white py-2 rounded hover:bg-[#604936]"
            >
              Confirm Add to Cart
            </button>

            <button
              onClick={() => showModal(false)}
              className="mt-2 w-full text-sm text-gray-600 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
