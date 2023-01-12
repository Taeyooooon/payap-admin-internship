import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderList from './pages/Order/OrderList/OrderList';
import OrderDetail from './pages/Order/OrderDetail/OrderDetail';
import ProductList from './pages/Product/ProductList/ProductList';
import ProductDetail from './pages/Product/ProductDetail/ProductDetail';
import ProductUpload from './pages/Product/ProductUpload/ProductUpload';
import Aside from './components/Aside/Aside';

const Router = () => {
  return (
    <BrowserRouter>
      <Aside />
      <Routes>
        <Route path="/order-list" element={<OrderList />} />
        <Route path="/order-detail" element={<OrderDetail />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/product-upload" element={<ProductUpload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
