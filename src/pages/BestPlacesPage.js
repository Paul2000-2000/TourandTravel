import React from "react";
import BestPlaces from "../views/bestplaces/bestplaces.js";
import QuickLinks from "../views/quicklinks/quicklinks.js";
import Navbar from "../components/navbar/navbar.js";

const BestPlacesPage = () => {
  return (
    <div>
      <Navbar />\
      <div style={{ paddingTop: "50px" }}>
        <BestPlaces />
        <QuickLinks />
      </div>
    </div>
  );
};

export default BestPlacesPage;
