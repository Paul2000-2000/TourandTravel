import React from "react";
import Blogs from "./../views/blogs/blogs.js";
import QuickLinks from "../views/quicklinks/quicklinks.js";
import Navbar from "../components/navbar/navbar.js";

const BlogsPage = () => {
  return (
    <div>
      <Navbar />\
      <div style={{ paddingTop: "50px" }}>
        <Blogs />
        <QuickLinks />
      </div>
    </div>
  );
};

export default BlogsPage;
