import React from "react";
import Sub_Shop from "../../Components/Shop/Sub_Shop";
import Main from "../../Components/Shop/Main";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";

const Shop = () => {
  return (
    <>
    <Header/>
      <Sub_Shop />
      <Main />
      <Footer/>
    </>
  );
};

export default Shop;
