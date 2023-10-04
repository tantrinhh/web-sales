import React from "react";
import Sub_Contact from "../../Components/Contact/Sub_Contact";
import Main from "../../Components/Contact/Main";
import LayoutPage from "../../Components/Layout/Layout_Page";

const index = () => {
  return (
    <>
      <LayoutPage>
        <Sub_Contact />
        <Main />
      </LayoutPage>
    </>
  );
};

export default index;
