import React from "react";
import "./Settings.css";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-gxZXIk3yc8h7nt1sWZG75h3vqD2vB2TmUpQ+gUpAitvSXcBOOVzIya5A6EZaxEWM" crossorigin="anonymous"/>


const Settings = () => {
  return (
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
          <input type="email" className="big-input email-input" placeholder="Enter your email"/>
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
  );
};

export default Settings;
