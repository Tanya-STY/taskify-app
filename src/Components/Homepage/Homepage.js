import React from "react";
import "./Homepage.css";
import homepageimg from "../Image/homepage-image.jpg";
import bellicon from "../Image/bell-icon.png";
import "../Image/magnify-icon.png";
import { Link } from "react-router-dom";

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
    <div className="container-homepage">
      <div className="homepage-banner">
        <img src={homepageimg} alt="banner" className="homepage-image" />
        <p className="list-name-homepage">My To-Do List</p>
        <p className="homepage-date">{formattedDate}</p>
        <p className="homepage-welcome">Hello, Meredith! </p>
        <p className="homepage-welcome-message">
          Welcome back! Each day I will accomplish one thing on my list.
        </p>
        <Link to={"/"}>
          <img src={bellicon} alt="bell icon" className="bell-icon-homepage" />
        </Link>
      </div>
      <div className="homepage-search">
        <input type="text" placeholder="Tasks, Tags, Title, etc." className="search-bar-homepage" />
        <button className="new-task-button">New Task</button>
      </div>
      <div className="homepage-history">
      <button className="history-button">History</button>
      </div>
    </div>
  );
};

export default Homepage;
