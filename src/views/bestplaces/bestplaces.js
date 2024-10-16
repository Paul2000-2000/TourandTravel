import React from "react";
import Place from "../../components/place/place.js";
import data from "./../../data/dataplace.js";
import "./bestplaces.css";

const bestplaces = () => {
  return (
    <div className="places">
      <div className="places-hb">
        <h1 id="places-hb-h">Best Places to Visit</h1>
      </div>
      <div className="places-content">
        {data.map((place) => (
          <Place
            key={place.id}
            city={place.city}
            country={place.country}
            description={place.description}
            image={place.image}
            price={place.price}
          />
        ))}
      </div>
    </div>
  );
};

export default bestplaces;
