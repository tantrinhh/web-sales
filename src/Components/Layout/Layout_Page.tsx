import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TopFooter from "./TopFooter";

const LayoutPage = ({ children }: any) => {
  return (
    <>
      <Header />

      {children}
      <TopFooter />
      <Footer />
    </>
  );
};

export default LayoutPage;
