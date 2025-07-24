import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { removeFromCart } from '../src/redux/cartSlice';

const CartDisplay = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItem);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const removeCartItem = (item) => {
    dispatch(removeFromCart(item));
    toast.error(`${item.name} has been removed from your cart!`);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">🛍️ Your cart is currently empty.</p>
      ) : (
        <div className="space-y-6">
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border shadow-sm hover:bg-gray-100 transition"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-700">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    ₦{item.price} × {item.quantity} = <strong>₦{item.price * item.quantity}</strong>
                  </p>
                </div>
                <button
                  onClick={() => removeCartItem(item)}
                  className="text-red-500 font-semibold text-sm hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="border-t pt-6 text-right space-y-1">
            <p className="text-md font-medium text-gray-600">🧾 Total Items: <span className="font-bold">{totalQuantity}</span></p>
            <p className="text-xl font-bold text-green-600">💰 Total Amount: ₦{totalAmount}</p>
          </div>
          <button className='cursor-pointer'>Payout</button>
        </div>
      )}
    </div>
  );
};

export default CartDisplay;
