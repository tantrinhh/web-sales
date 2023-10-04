import React from "react";
import LayoutPage from "../../Components/Layout/Layout_Page";
import Sub_Checkout from "../../Components/Checkout/Sub_Checkout"
import CheckOut from "../../Components/Checkout/Checkout";

const index = () => {
  return (
    <>
      <LayoutPage>
        <Sub_Checkout/>
        <CheckOut/>
      </LayoutPage>
    </>
  );
};

export default index;
