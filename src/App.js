
import './App.css';
import Product from './Product'
import Cart from './Cart'
import Home from './Home'
import ProductDetail from './ProductDetail'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import { useState } from 'react';
function App() {
  const [dataFromProductDet, setDataFromProductDet] = useState('')

  const handleCart=(val)=>{
     setDataFromProductDet(val)
  }
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/detail/:id" element={<ProductDetail onHandleCart={handleCart}/>}  />
        <Route path="/cart" element={<Cart data = {dataFromProductDet}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

