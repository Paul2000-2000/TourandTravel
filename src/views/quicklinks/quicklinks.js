import React from "react";
import Video from "../../assets/footer.mp4";
import "./quicklinks.css";
import Logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { TiArrowRightOutline } from "react-icons/ti";

const quicklinks = () => {
  return (
    <div className="quicklinks">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="quicklinks-content">
        <div className="quicklinks-content-first">
          <div className="quicklinks-content-first-div-first">
            <div>
              <img src={Logo} alt="" id="quicklinks-content-first-div-logo" />
              <p id="quicklinks-content-first-div-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                facere ab hic accusamus omnis dolor voluptatibus illo, tempore
                eum tenetur.
              </p>
            </div>
            <div className="twoel">
              <FaRegAddressCard />
              <p id="quicklinks-content-first-div-auth">Noida, Uttar Pradesh</p>
            </div>
            <div className="twoel">
              <MdOutlineSmartphone />
              <p id="quicklinks-content-first-div-numb">+123 456 789</p>
            </div>
            <div className="quicklinks-content-first-div-soc">
              <FaFacebook style={{ width: "25px", height: "25px" }} />
              <FaInstagram style={{ width: "25px", height: "25px" }} />
              <FaLinkedin style={{ width: "25px", height: "25px" }} />
            </div>
          </div>
          <div className="quicklinks-content-first-div ">
            <h2 className="quicklinks-content-first-div-title">
              Important Links
            </h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TiArrowRightOutline />
              <p className="quicklinks-content-first-div-item">Home</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TiArrowRightOutline />
              <p className="quicklinks-content-first-div-item">About</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TiArrowRightOutline />
              <p className="quicklinks-content-first-div-item">Best Places</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TiArrowRightOutline />
              <p className="quicklinks-content-first-div-item">Blogs</p>
            </div>
          </div>
          <div className="quicklinks-content-first-div ">
            <h2 className="quicklinks-content-first-div-title">
              Important Links
            </h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TiArrowRightOutline />
              <p className="quicklinks-content-first-div-item">Home</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TiArrowRightOutline />
              <p className="quicklinks-content-first-div-item">About</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TiArrowRightOutline />
              <p className="quicklinks-content-first-div-item">Best Places</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TiArrowRightOutline />
              <p className="quicklinks-content-first-div-item">Blogs</p>
            </div>
          </div>
          <div className="quicklinks-content-first-div ">
            <h2 className="quicklinks-content-first-div-title">
              Important Links
            </h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TiArrowRightOutline />
              <p className="quicklinks-content-first-div-item">Home</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TiArrowRightOutline />
              <p className="quicklinks-content-first-div-item">About</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TiArrowRightOutline />
              <p className="quicklinks-content-first-div-item">Best Places</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TiArrowRightOutline />
              <p className="quicklinks-content-first-div-item">Blogs</p>
            </div>
          </div>
        </div>
        <div className="quicklinks-content-s">
          <p>@copyright 2024 All rights reserved || Made with ❤️ by TCJ</p>
        </div>
      </div>
    </div>
  );
};

export default quicklinks;
