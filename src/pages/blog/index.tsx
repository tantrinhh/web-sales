import React from "react";
import LayoutPage from "../../Components/Layout/Layout_Page";
import Blog from "../../Components/Blog/blog";
import Sub_blog from "../../Components/Blog/sub_blog"

const index = () => {
  return (
    <div className="bg-[#FFFFFF]">
    <LayoutPage>
      <Sub_blog/>
      <Blog/>
    </LayoutPage>
    </div>
  )
};

export default index;
