import React , {useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from './components/Navbar'
import CartDisplay from '../pages/CartDisplay'
import { useSelector } from 'react-redux'
import Product from '../pages/Product'
import ProductDetails from '../pages/ProductDetails'

function App() {

  const cartItems = useSelector(st => st.cart.cartItem);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const totalCartQuantity = useSelector(state => state.cart.totalCartQy);
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartTotalAmount', totalAmount);
    localStorage.setItem('totalCartQuantity', totalCartQuantity);
  }, [cartItems, totalAmount, totalCartQuantity])

  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/cart' element={<CartDisplay />} />
         <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetails />} />
    </Routes>
    </>
  )
}

export default App
