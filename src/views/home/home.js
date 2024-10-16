import React from "react";
import Navbar from "../../components/navbar/navbar.js";
import "./home.css";
import Video from "../../assets/main.mp4";

const home = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="video-background">
          <video autoPlay muted loop>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="content">
          <p id="content-p">Our Packages</p>
          <h2 id="content-h">Search Your Destination</h2>
          <div className="content-destination">
            <div className="content-destination-caract">
              <label className="content-destination-caract-label">
                Search your Destination
              </label>
              <input
                className="content-destination-caract-inp"
                id="content-destination-caract-dest"
              />
            </div>
            <div className="content-destination-caract">
              <label className="content-destination-caract-label">Date</label>
              <input
                className="content-destination-caract-inp"
                id="content-destination-caract-date"
                type="date"
              />
            </div>
            <div className="content-destination-caract">
              <div className="content-destination-caract-div">
                <label className="content-destination-caract-label">
                  Max Price
                </label>
                <p id="content-destination-caract-price"> $20</p>
              </div>
              <input
                id="content-destination-caract-sp"
                className="content-destination-caract-inp"
                type="number"
              />
            </div>
          </div>
          <button id="content-destination-but">Search Now</button>
        </div>
      </div>
    </div>
  );
};

export default home;
