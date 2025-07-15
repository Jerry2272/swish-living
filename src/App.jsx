import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from './components/Navbar'
import CartDisplay from '../pages/CartDisplay'

function App() {

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
