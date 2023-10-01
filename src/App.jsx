import React from 'react'
import Product from './pages/Product';
import Home from "./pages/Home";
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Products from './components/Products';


const App = () => {
  return (
    // <Home />
    <BrowserRouter>
      <Routes>

      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      {/* <Route path='products' element={<Products />} /> */}
      <Route path='productlist' element={<ProductList />} />
      <Route path='productlist' element={<ProductList />} />

      

      </Routes>
    </BrowserRouter>

    
  )
}

export default App

