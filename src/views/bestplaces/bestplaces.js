import React from "react";
import Place from "../../components/place/place.js";
import data from "./../../data/dataplace.js";

const bestplaces = () => {
  return (
    <div className="blogs">
      <div className="blogs-hb">
        <h1 id="blogs-hb-h"> Our Latest Blogs</h1>
      </div>
      <div className="blogs-content">
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
