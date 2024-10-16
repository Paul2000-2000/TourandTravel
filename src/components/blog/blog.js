import React from "react";
import "./blog.css";

const blog = ({ id, date, title, description, image }) => {
  return (
    <div className="blog" key={id}>
      <img src={image} alt="" id="blog-img" />
      <div className="blog-div">
        <p>{date}</p>
        <p>By Someone</p>
      </div>
      <p id="blog-title">{title}</p>
      <p id="blog-desc">{description.slice(0, 45)}...</p>
    </div>
  );
};

export default blog;
