import React from "react";
import Sub_Shop from "../../Components/Shop/Sub_Shop";
import Main from "../../Components/Shop/Main";
import LayoutPage from "../../Components/Layout/Layout_Page";
import GoToTop from "../../Components/Common/GoToTop";

const index = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <GoToTop />
      <LayoutPage>
        <Sub_Shop />
        <Main />
      </LayoutPage>
    </div>
  );
};

export default index;
