import React , {useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from './components/Navbar'
import CartDisplay from '../pages/CartDisplay'
import { useSelector } from 'react-redux'
import Product from '../pages/Product'
import ProductDetails from '../pages/ProductDetails'
import Notfound from '../pages/Notfound'
import Gallery from '../pages/Gallery'
import Gallerydetails from '../pages/Gallerydetails'
import Footer from './components/Footer'
import About from '../pages/About'
import Contact from '../pages/Contact'

function App() {

  const cartItems = useSelector(st => st.cart.cartItem);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const totalCartQuantity = useSelector(state => state.cart.totalCartQy);
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartTotalAmount', totalAmount);
    localStorage.setItem('totalCartQuantity', totalCartQuantity);
  }, [cartItems, totalAmount, totalCartQuantity]);

  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<CartDisplay />} />
        <Route path='/gallery' element={<Gallery />}   />
        <Route path='/gallery/:id' element={<Gallerydetails />}   />
         <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='*' element={<Notfound/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
