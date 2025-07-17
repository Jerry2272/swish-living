import React , {useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from './components/Navbar'
import CartDisplay from '../pages/CartDisplay'
import { useSelector } from 'react-redux'

function App() {

  const cartItems = useSelector(state => state.cart.cartItem);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    localStorage.setItem('cartTotalAmount', totalAmount)
  }, [cartItems, totalAmount])

  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/cart' element={<CartDisplay />} />
    </Routes>
    </>
  )
}

export default App
