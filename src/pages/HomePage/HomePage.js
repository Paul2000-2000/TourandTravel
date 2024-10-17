import React from "react";
import "./HomePage.css";
import Home from "../../views/home/home.js";
import BestPlaces from "../../views/bestplaces/bestplaces.js";
import Blog from "../../views/blogs/blogs.js";
import QuickLinks from "../../views/quicklinks/quicklinks.js";
import FirstImage from "../../assets/homepagefirst.jpeg";
import SecondImage from "../../assets/homepagesecond.jpeg";
import Explore from "../../views/explore/explore.js";

const HomePage = () => {
  return (
    <div>
      <Home />
      <BestPlaces />
      <img src={FirstImage} alt="" className="homepageimages" />
      <Blog />
      <img src={SecondImage} alt="" className="homepageimages" />
      <Explore />
      <QuickLinks />
    </div>
  );
};

export default HomePage;
