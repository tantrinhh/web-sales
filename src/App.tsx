import Shop from "./pages/shop";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Blog from "./pages/blog";
import Checkout from "./pages/checkout";
import ProductComparison from "./pages/productComparison";
import SingleProduct from "./pages/singleProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productComparison" element={<ProductComparison />} />
        <Route path="/singleProduct" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
