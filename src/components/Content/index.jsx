import React from "react";

import contentImage from "../../assets/content-image.png";
import bottleIcon from "../../assets/bottle-icon.png";
import boxIcon from "../../assets/box-icon.png";
import gearsIcon from "../../assets/gears-icon.png";

import "./index.scss";

const Content = () => (
  <div className="sg-content">
    <div className="sg-content__inner-container">
      <div className="sg-content__inner-left">
        <div className="content-image-container">
          <img
            className="content-image"
            src={contentImage}
            alt="Group pouring champagne into glasses."
          />
        </div>
      </div>
      <div className="sg-content__inner-right">
        <h1 className="heading">
          Knowing the numbers is never <span className="italic">enough.</span>
        </h1>
        <h2>
          It's about understanding the opportunities and challenges behind the
          numbers — and planning for a stronger future. What's the right product
          selection for your customers? Which tools and information could make
          your business even more successful? At Southern Glazer's, we tailor
          our services for each and every one of our customers. Because we know
          that when we come together, there's always something to celebrate.
        </h2>
      </div>
    </div>
    <div className="sg-content__icons">
      <div className="customers-container">
        <img
          className="content-image"
          src={bottleIcon}
          alt="Graphic of liquor bottle"
        />
        <h3>Customers</h3>
        <h4>See our portfolio</h4>
      </div>
      <div className="suppliers-container">
        <img
          className="content-image"
          src={boxIcon}
          alt="Graphic of box of supplies"
        />
        <h3>Suppliers</h3>
        <h4>Work with us</h4>
      </div>
      <div className="team-container">
        <img className="content-image" src={gearsIcon} alt="Graphic of gears" />
        <h3>Team</h3>
        <h4>Sign in or apply</h4>
      </div>
    </div>
  </div>
);

export default Content;
