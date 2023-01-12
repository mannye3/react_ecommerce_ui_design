import Home from "./pages/Home";
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from "./pages/Register";
//import Product from './componets/Product';
import Login from './pages/Login';
import Cart from './pages/Cart';

import { Route, Routes } from "react-router-dom"



export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product" element={<Product />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      
    </Routes>
  )
}

export default App;