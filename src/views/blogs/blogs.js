import React from "react";
import "./blogs.css";
import data from "../../data/datablogs.js";
import Blog from "../../components/blog/blog.js";

const blogs = () => {
  return (
    <div className="blogs">
      <div className="blogs-hb">
        <h1 id="blogs-hb-h"> Our Latest Blogs</h1>
      </div>
      <div className="blogs-content">
        {data.map((blog) => (
          <Blog
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

export default blogs;
