import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  
  const handleaddTocart = () =>{
      dispatch(addToCart(product))
      toast.success(`${product.name} has been added to your cart!`)
  }
  return (
    <div className="bg-white text-black p-4 shadow-xl rounded-xl w-full  transform hover:scale-105 transition duration-300">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />

      <h2 className="mt-4 font-semibold text-xl">{product.name}</h2>
      <span className="text-yellow-500">{product.star}</span>

      <div className="mt-2">
        <h6 className="text-lg font-bold">₦{product.price}</h6>
        <button className="mt-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition" 
        style={{cursor: 'pointer'}}
        onClick={handleaddTocart}
        >
          {product.addCart}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
