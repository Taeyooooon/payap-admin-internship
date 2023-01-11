import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Order from './pages/Order/Order';
import Product from './pages/Product/Product';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/order" element={<Order />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
