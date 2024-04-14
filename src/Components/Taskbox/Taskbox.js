import React from "react";
import "./Taskbox.css";
import editicon from "../Image/edit-icon.png";

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
}

const Taskbox = ({ title, description, tag, date, priority }) => {
  // description = "strength training session with me and everyone"; //delete
  // title = "Gym Workout Regime AHHHHHHHH"; //delete
  // date = "15 November 2024"; //delete
  // tag = "workout"; // delete

  const maxLengthDesc = 30;
  const maxLengthTitle = 22;
  const truncatedesc = truncateText(description, maxLengthDesc);
  const trunactetitle = truncateText(title, maxLengthTitle);

  // priority = "High"; //delete

  let priorityClass;
  switch (priority.toLowerCase()) {
    case "low":
      priorityClass = "low-priority";
      break;
    case "medium":
      priorityClass = "medium-priority";
      break;
    case "high":
      priorityClass = "high-priority";
      break;
    default:
      priorityClass = ""; // Default class if priority value doesn't match any case
  }

  return (
    <>
      <div className="taskbox">
        <p className="title-taskbox">{trunactetitle}</p>
        <p className="tag-taskbox">{tag}</p>
        <p className="description-taskbox">{truncatedesc}</p>
        <p className="date-taskbox">{date}</p>
        <p className={`priority-taskbox ${priorityClass}`}>{priority}</p>
        <button className="button-taskbox">
          <img src={editicon} alt="edit" className="editicon-taskbox" />
        </button>
      </div>
    </>
  );
};
export default Taskbox;
