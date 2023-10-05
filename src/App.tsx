import Shop from "./pages/shop/index";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";
import { Cart } from "./pages/cart";
import Blog from "./pages/blog";
import Checkout from "./pages/checkout";
import Product_comparison from "./pages/product_comparison";
import Single_product from "./pages/single_product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product_comparison" element={<Product_comparison />} />
        <Route path="/single_product" element={<Single_product />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
