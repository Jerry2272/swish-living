import { createSlice } from "@reduxjs/toolkit";

const loadedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
const initialState = {
  cartItem: loadedCart,
    totalQuantity : 0,
    totalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers:{
       addToCart: (state, action) => {
  const existingItem = state.cartItem.find(item => item.id === action.payload.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cartItem.push({ ...action.payload, quantity: 1 });
  }

  state.totalQuantity += 1;
  state.totalAmount = state.cartItem.reduce((total, item) => total + (item.price * item.quantity), 0);
}

    }

})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer