import React from "react";
import "./OneBlogPage.css";
import { useParams } from "react-router-dom";
import datablogs from "../../data/datablogs.js";
import Navbar from "../../components/navbar/navbar.js";
import Blogs from "../../views/blogs/blogs.js";
import QuickLinks from "../../views/quicklinks/quicklinks.js";

const OneBlogPage = () => {
  const { id } = useParams();

  const blog = datablogs.find((blog) => blog.id === parseInt(id));

  return (
    <div className="oneblog">
      <Navbar />
      <img src={blog.image} alt="" className="oneblog-image" />
      <div className="oneblog-content">
        <p id="oneblog-content-auth"> written by John Doe on {blog.date}</p>
        <h1 id="oneblog-content-title">{blog.title}</h1>
        <p>{blog.description}</p>
      </div>
      <Blogs />
      <QuickLinks />
    </div>
  );
};

export default OneBlogPage;
