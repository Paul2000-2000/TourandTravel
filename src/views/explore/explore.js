import React from "react";
import "./explore.css";
import ExploreImage from "../../assets/exploreimage.png";
import { MdOutlineFlight } from "react-icons/md";
import { RiHotelBedLine } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";

const explore = () => {
  return (
    <div className="explore">
      <img src={ExploreImage} alt="" id="exploreimg" />
      <div className="explore-content">
        <h2 id="explore-content-title">
          Explore all corners of the world with us
        </h2>
        <p id="explore-content-desc">
          Discover hidden gems, unforgettable experiences, and unparalleled
          adventures that await you on our unique and thrilling adventure.
        </p>
        <div className="explore-content-options">
          <div className="explore-content-options-option">
            <MdOutlineFlight className="explore-icons" />
            <p className="explore-content-options-option-v">Flight</p>
          </div>
          <div className="explore-content-options-option">
            <RiHotelBedLine className="explore-icons" />
            <p className="explore-content-options-option-v">Hotel</p>
          </div>
          <div className="explore-content-options-option">
            <FaWifi className="explore-icons" />
            <p className="explore-content-options-option-v">Wi-fi</p>
          </div>
          <div className="explore-content-options-option">
            <IoFastFoodSharp className="explore-icons" />
            <p className="explore-content-options-option-v">Foods</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default explore;
