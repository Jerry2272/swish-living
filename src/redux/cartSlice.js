import { createSlice } from "@reduxjs/toolkit";

const loadedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
const totalCartAmount  = localStorage.getItem('cartTotalAmount');
const totalCartQuantity = localStorage.getItem('totalCartQy');
const initialState = {
  cartItem: loadedCart,
    totalQuantity : totalCartQuantity,
    totalAmount: totalCartAmount,
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
},
 removeFromCart: (state, action) => {
  const index = state.cartItem.findIndex(item => item.id === action.payload.id);
  if (index !== -1) {
    state.totalQuantity -= state.cartItem[index].quantity;
    state.cartItem.splice(index, 1);
    state.totalAmount = state.cartItem.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}


    }

})

export const {addToCart ,  removeFromCart} = cartSlice.actions
export default cartSlice.reducer