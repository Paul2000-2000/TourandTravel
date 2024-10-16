import React from "react";
import "./place.css";

const place = ({ id, city, country, description, image, price }) => {
  return (
    <div className="place" key={id}>
      <img src={image} alt="" id="place-img" />
      <p id="place-city">{city}</p>
      <p id="place-country">{country}</p>
      <p id="place-desc">{description.slice(0, 45)}...</p>

      <div className="place-div">
        <p>Cultural Relax</p>
        <p id="place-div-price">${price}</p>
      </div>
    </div>
  );
};

export default place;
