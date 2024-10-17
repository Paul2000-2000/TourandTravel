import React from "react";
import "./AboutPage.css";
import Navbar from "../../components/navbar/navbar.js";
import QuickLinks from "../../views/quicklinks/quicklinks.js";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "100px" }}>
        <div className="aboutpage-content">
          <div className="about-hb">
            <h1 id="about-hb-h"> About Us</h1>
          </div>
          <p className="about-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab
            facilis dicta dolores est quisquam qui doloribus necessitatibus
            molestias esse saepe sit, deserunt numquam possimus non. Repellat ab
            recusandae sint ad, et explicabo saepe. Corporis ratione debitis
            quibusdam vitae, praesentium adipisci eius veniam earum dolorum sint
            totam omnis cupiditate tenetur eveniet aliquam. Quam perferendis,
            ratione consectetur itaque at quaerat ipsam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            consectetur iste ad voluptatem repellendus illo vitae, animi
            laudantium reiciendis natus aperiam odit possimus distinctio
            accusamus at quisquam cumque doloremque suscipit porro perferendis,
            ipsam magni. At ut officia illum porro delectus.
          </p>
        </div>
        <QuickLinks />
      </div>
    </div>
  );
};

export default AboutPage;
