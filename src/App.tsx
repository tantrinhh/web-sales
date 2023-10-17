import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Blog from "./pages/blog";
import { Cart } from "./pages/cart";
import Checkout from "./pages/checkout";
import Contact from "./pages/contact";
import Home from "./pages/home/Home";
import Product_comparison from "./pages/product_comparison";
import Shop from "./pages/shop/index";
import Single_Product from "./pages/single_product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product_comparison" element={<Product_comparison />} />
        <Route path="/single_product" element={<Single_Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
