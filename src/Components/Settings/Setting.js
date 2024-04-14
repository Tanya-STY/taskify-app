import React from "react";
import "./Settings.css";
import { FaEnvelope } from "react-icons/fa";
import HomepageBanner from "../HomepageBanner/HomepageBanner";

const Settings = () => {

  return (
    <div>
        <HomepageBanner title="Settings" /> {/* Pass the title prop here */}
    <div className="settings-container">
      <div className="left-section">
        <div className="field">
          <label className="label">First Name</label>
          <input type="text" className="small-input " placeholder="First Name" />
        </div>
        <div className="field">
          <label className="label display-name-label">Display Name</label>
          <input type="text" className="small-input" placeholder="Display Name" />
        </div>
        <div className="field">
          <label className="label email-label">Email</label>
          <div className="input-with-icon">
          <FaEnvelope className="input-icon" />
          <input type="email" className="big-input email-input" placeholder="Enter your email"/>
        </div>
        </div>
      </div>
      <div className="right-section">
        <div className="field">
          <label className="label">Last Name</label>
          <input type="text" className="small-input" placeholder="Last Name"/>
        </div>
      </div>
      <div className="bottom-section">
        <button className="save-button">Save</button>
      </div>
    </div>
    </div>
  );
};

export default Settings;
