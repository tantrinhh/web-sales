import Shop from "./pages/shop/index";
import ProductComparison from "./Components/Product_Comparison/ProductComparison";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";
import { Cart } from "./pages/cart";
import Blog from "./pages/blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<ProductComparison />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </Router>
  );
}

export default App;
