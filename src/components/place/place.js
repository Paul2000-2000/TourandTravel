import React from "react";
import "./place.css";
import { CiLocationOn } from "react-icons/ci";

const place = ({ id, city, country, description, image, price }) => {
  return (
    <div className="place" key={id}>
      <img src={image} alt="" id="place-img" />
      <p id="place-city">{city}</p>
      <div style={{ display: "flex", gap: "5px" }}>
        <CiLocationOn />
        <p id="place-country">{country}</p>
      </div>
      <p id="place-desc">{description.slice(0, 45)}...</p>

      <div className="place-div">
        <p>Cultural Relax</p>
        <p id="place-div-price">${price}</p>
      </div>
    </div>
  );
};

export default place;
