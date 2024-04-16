import React from "react";
import "./History.css";
import "../Image/magnify-icon.png";
import HomepageBanner from "../HomepageBanner/HomepageBanner";
import Taskbox from "../Taskbox/Taskbox";

const History = () => {

  return (
<>
      <HomepageBanner title="History - My To-Do List" /> {/* Pass the title prop here */}

      <div className="homepage-search">
        <input
          type="text"
          placeholder="Tasks, Tags, Title, etc."
          className="search-bar-homepage"
        />
      </div>
      <div className="tasks-homepage">
        <Taskbox
          title="Gym Workout"
          description="Strength Training Session"
          tag="Workout"
          date="15 March 2024"
          priority="Low"
        />
        <Taskbox
          title="Call Mom"
          description="Catch Up on Family News"
          tag="Family"
          date="28 February 2024"
          priority="Medium"
        />

      </div>
    </>
  );
};

export default History;
