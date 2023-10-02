import React from "react";
import Sub_Shop from "../../Components/Shop/Sub_Shop";
import Main from "../../Components/Shop/Main";
import LayoutPage from "../../Components/Layout/Layout_Page";

const index = () => {
  return (
    <>
      <LayoutPage>
        <Sub_Shop />
        <Main />
      </LayoutPage>
    </>
  );
};

export default index;
