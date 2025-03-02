import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";

import Product from "./Component/Product"
import CommonLAyout from './Component/CommonLAyout';
import HomePage from './Component/HomePage';
import Service from './Component/Service';
import About from './Component/About';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLAyout />} >
        
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App