import cartSlice from './cartSlice'
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{
        cart: cartSlice 
    }
})

export default store