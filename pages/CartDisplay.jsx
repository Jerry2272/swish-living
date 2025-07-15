import React from 'react';
import { useSelector } from 'react-redux';

const CartDisplay = () => {
  const cartItems = useSelector(state => state.cart.cartItem);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Sorry, no items added yet.</p>
      ) : (
        <div className="space-y-4">
          <ul className="space-y-3">
            {cartItems.map(item => (
              <li key={item.id} className="border-b pb-2">
                <p className="font-medium">{item.name}</p>
                <p>₦{item.price} × {item.quantity} = <strong>₦{item.price * item.quantity}</strong></p>
              </li>
            ))}
          </ul>

          {/* Show total just once below the list */}
          <div className="mt-6 border-t pt-4 text-right">
            <p className="font-semibold">🧾 Total Items: {totalQuantity}</p>
            <p className="font-bold text-lg">💰 Total Amount: ₦{totalAmount}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDisplay;
