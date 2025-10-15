import React, { useContext } from 'react';
import Navbar from './components/NavBar';
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import EditProduct from './pages/EditProduct';
import { AuthProvider } from '../context/AuthContext';
import Register from './pages/Register';
import { ProductProvider } from '../context/Context';

const App = () => {
  
  return (
    <ProductProvider>
      <AuthProvider>
        <div className="app">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Login />} />
              <Route path="/products" element={<Home />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/product/edit/:id" element={<EditProduct />} />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </ProductProvider>
  );
};

export default App;
