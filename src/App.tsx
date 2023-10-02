import React from "react";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import HomePage from "./Components/Home/HomePage";
import ProductComparison from "./Components/Product_Comparison/ProductComparison";

function App() {

  return (
    <>
      {" "}
      <Header />
      <ProductComparison/>
      <Footer />
  
    </>
  );



}

export default App;
