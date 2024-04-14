import React from "react";
import "./Homepage.css";
import "../Image/magnify-icon.png";
import HomepageBanner from "../HomepageBanner/HomepageBanner";
import Taskbox from "../Taskbox/Taskbox";

const Homepage = () => {

  return (
<>
      <HomepageBanner title="My To-Do List" /> {/* Pass the title prop here */}

      <div className="homepage-search">
        <input
          type="text"
          placeholder="Tasks, Tags, Title, etc."
          className="search-bar-homepage"
        />
        <button className="new-task-button">New Task</button>
        <button className="history-button">History</button>
      </div>
      <div className="tasks-homepage">
        <Taskbox
          title="React Tutorial"
          description="Learn React Fundamentals"
          tag="Learning"
          date="15 November 2024"
          priority="Medium"
        />
        <Taskbox
          title="Write Blog Post"
          description="Benefits of Meditation"
          tag="BlogPost"
          date="9 April 2024"
          priority="High"
        />
        <Taskbox
          title="Family Zoom"
          description="Family Trip for Summer"
          tag="Meeting"
          date="13 April 2024"
          priority="Medium"
        />
        <Taskbox
          title="Gym Workout"
          description="Strength Training Session"
          tag="Workout"
          date="15 July 2024"
          priority="Low"
        />
        <Taskbox
          title="Call Mom"
          description="Catch Up on Family News"
          tag="Family"
          date="28 September 2024"
          priority="Medium"
        />
        <Taskbox
          title="Finish Studying"
          description="WE CAN DO THIS!!!"
          tag="StudySesh"
          date="20 April 2024"
          priority="High"
        />

      </div>
    </>
  );
};

export default Homepage;
