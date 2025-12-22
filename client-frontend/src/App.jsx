import React from 'react'
import './App.css'
import { BrowserRouter, Route , Routes , Link } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Products from '../pages/Products.jsx';
import Profile from '../pages/Profile.jsx';
import Cart from '../pages/Cart.jsx';
import ProductDetails from '../pages/ProductDetails.jsx';
import Navbar from '../components/Navbar.jsx';

function App() {

  return (
    <>
       <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
