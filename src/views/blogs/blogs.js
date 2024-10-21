import React from "react";
import "./blogs.css";
import data from "../../data/datablogs.js";
import Blog from "../../components/blog/blog.js";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  const handleOneBlog = (id) => {
    console.log(`Navigating to blog with ID: ${id}`); // Debugging
    navigate(`/blogs/${id}`);
  };

  return (
    <div className="blogs">
      <div className="blogs-hb">
        <h1 id="blogs-hb-h"> Our Latest Blogs</h1>
      </div>
      <div className="blogs-content">
        {data.map((blog) => (
          <Blog
            onClick={() => handleOneBlog(blog.id)}
            key={blog.id}
            date={blog.date}
            title={blog.title}
            description={blog.description}
            image={blog.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
