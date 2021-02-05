import React from "react";

import splashImage1 from "../../assets/splash-image-1.png";
import splashImage2 from "../../assets/splash-image-2.png";
import mustardRectangle from "../../assets/mustard-rectangle.png";
import stamp from "../../assets/stamp.png";

import "./index.scss";

const Splash = () => (
  <div className="sg-splash">
    <div className="sg-splash__inner-container">
      <div className="sg-splash__inner-left">
        <h1 className="heading">
          To bringing people <span className="italic">together.</span>
        </h1>
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </h2>
        <button className="portfolio-button">PORTFOLIO</button>
      </div>
      <div className="sg-splash__inner-right">
        <div className="graphics-container--outer">
          <div className="graphics-container--inner">
            <img
              className="splash-image-1"
              src={splashImage1}
              alt="Woman reaching for something on shelf."
            />
            <img
              className="mustard-rectangle"
              src={mustardRectangle}
              alt="Mustard colored rectangle"
            />
            <img
              className="splash-image-2"
              src={splashImage2}
              alt="Warehouse working manning some machinery."
            />
          </div>
        </div>
      </div>
    </div>
    <img className="stamp" src={stamp} alt="stamp" />
  </div>
);

export default Splash;
