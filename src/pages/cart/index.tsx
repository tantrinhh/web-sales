import React from "react";
import LayoutPage from "../../Components/Layout/Layout_Page";
import Sub_Cart from "../../Components/Cart/Sub_Cart";
import Main_Cart from "../../Components/Cart/Cart";

export const Cart = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <LayoutPage>
        <Sub_Cart />
        <Main_Cart />
      </LayoutPage>
    </div>
  );
};
