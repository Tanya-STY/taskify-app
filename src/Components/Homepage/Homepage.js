import React from "react";
import "./Homepage.css";
import homepageimg from "../Image/homepage-image.jpg";
import bellicon from "../Image/bell-icon.png";
import "../Image/magnify-icon.png";
import { Link } from "react-router-dom";
import HomepageBanner from "../HomepageBanner/HomepageBanner";

const Homepage = () => {
  const currentDate = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = currentDate
    .toLocaleDateString("en-US", options)
    .replace(/,/g, "-");

  return (
    <div>
      <HomepageBanner title="My To-Do List" formattedDate={formattedDate} /> {/* Pass the title prop here */}
      <div className="container-homepage">
        <div className="homepage-search">
          <input
            type="text"
            placeholder="Tasks, Tags, Title, etc."
            className="search-bar-homepage"
          />
          <button className="new-task-button">New Task</button>
        </div>
        <div className="homepage-history">
          <button className="history-button">History</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
