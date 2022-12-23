import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'

const Routers = () => {
  return (
    <Routes>    
      <Route path='home' element={<Home/>}></Route>
      <Route path='shop' element={<Shop/>}></Route>
      <Route path='cart' element={<Cart/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='signup' element={<Signup/>}></Route>
      <Route path='shop/:id' element={<ProductDetails/>}></Route>
      <Route path='checkout' element={<Checkout/>}></Route>
        
    </Routes>

  )
    
    
    
  
}


export default Routers