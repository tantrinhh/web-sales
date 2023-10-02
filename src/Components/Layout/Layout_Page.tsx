import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Top_Footer from "./Top_Footer";

const LayoutPage = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Top_Footer />
      <Footer />
    </>
  );
};

export default LayoutPage;
