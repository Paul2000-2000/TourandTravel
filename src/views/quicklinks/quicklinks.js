import React from "react";
import Video from "../../assets/footer.mp4";
import "./quicklinks.css";

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
        <div>
          <div>
            <img />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum
              tenetur.
            </p>
            <p>Noida, Uttar Pradesh</p>
            <p>+123 456 789</p>
            <div>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          <div>
            <h2>Important Links</h2>
            <p>Home</p>
            <p>About</p>
            <p>Best Places</p>
            <p>Blogs</p>
          </div>
          <div>
            <h2>Important Links</h2>
            <p>Home</p>
            <p>About</p>
            <p>Best Places</p>
            <p>Blogs</p>
          </div>
          <div>
            <h2>Important Links</h2>
            <p>Home</p>
            <p>About</p>
            <p>Best Places</p>
            <p>Blogs</p>
          </div>
        </div>
        <div>
          <p>@copyright 2024 All rights reserved || Made with ❤️ by TCJ</p>
        </div>
      </div>
    </div>
  );
};

export default quicklinks;
