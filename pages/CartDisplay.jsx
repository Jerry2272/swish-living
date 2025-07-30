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

  const handlePay = () => {
    const handler = window.PaystackPop.setup({
      key: 'pk_live_477ad7ea21e17ea29278a692fbea4b0842b81c11',
    email: 'jerryjake227@gmail.com', // Replace with dynamic if needed
    amount: totalAmount * 100, // dynamic amount
    currency: 'NGN',
    ref: `${Date.now()}`,
    callback: (r) => {
      alert('Payment complete! Reference: ' + r.reference);
      // optionally clear cart or verify with backend
    },
    onClose: () => {
      alert('Transaction closed.');
    },
  });

  handler.openIframe();
  };


  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-md mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          🛍️ Your cart is currently empty.
        </p>
      ) : (
        <div className="space-y-6">
          <ul className="divide-y divide-gray-200">
            {cartItems.map(item => (
              <li
                key={item.id}
                className="flex justify-between items-center py-4"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-700">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    ₦{item.price} × {item.quantity} = <span className="font-bold">₦{item.price * item.quantity}</span>
                  </p>
                </div>
                <button
                  onClick={() => removeCartItem(item)}
                  className="text-red-500 hover:underline text-sm font-medium cursor-pointer"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="border-t pt-4">
            <p className="text-md text-gray-600">
              🧾 Total Items: <span className="font-bold">{totalQuantity}</span>
            </p>
            <p className="text-xl font-bold text-green-600">
              💰 Total Amount: ₦{totalAmount}
            </p>
          </div>

          <div className="text-center">
            <button
            onClick={handlePay}
              className="bg-[#63412b] hover:bg-[#6d5e54] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition cursor-pointer"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDisplay;
