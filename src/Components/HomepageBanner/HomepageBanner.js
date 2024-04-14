// HomepageBanner.js

import React from "react";
import homepageimg from "../Image/homepage-image.jpg";
import bellicon from "../Image/bell-icon.png";
import { Link } from "react-router-dom";
import "./HomepageBanner.css";

const HomepageBanner = ({ formattedDate, title }) => {
  return (
    <div className="homepage-banner">
      <img src={homepageimg} alt="banner" className="homepage-image" />
      <p className="list-name-homepage">{title}</p>{" "}
      {/* Use the title prop here */}
      <p className="homepage-date">{formattedDate}</p>
      <p className="homepage-welcome">Hello, Meredith! </p>
      <p className="homepage-welcome-message">
        Welcome back! Each day I will accomplish one thing on my list.
      </p>
      <Link to={"/"}>
        <img src={bellicon} alt="bell icon" className="bell-icon-homepage" />
      </Link>
    </div>
  );
};

export default HomepageBanner;
