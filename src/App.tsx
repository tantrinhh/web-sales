import React from "react";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Shop from "./pages/shop/index";
import ProductComparison from "./Components/Product_Comparison/ProductComparison";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<ProductComparison />} />
      </Routes>
    </Router>

  );
}

export default App;
