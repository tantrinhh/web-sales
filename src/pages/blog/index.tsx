import React from "react";
import LayoutPage from "../../Components/Layout/Layout_Page";
import Blog from "../../Components/Blog/blog";
import Sub_blog from "../../Components/Blog/sub_blog"

const index = () => {
  return (
    <LayoutPage>
      <Sub_blog/>
      <Blog/>
    </LayoutPage>
  )
};

export default index;
