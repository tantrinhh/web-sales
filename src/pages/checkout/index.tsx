import React from "react";
import LayoutPage from "../../Components/Layout/Layout_Page";
import Sub_Checkout from "../../Components/Checkout/Sub_Checkout"
import CheckOut from "../../Components/Checkout/Checkout";

const index = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <LayoutPage>
        <Sub_Checkout/>
        <CheckOut/>
      </LayoutPage>
    </div>
  );
};

export default index;
