import { useMemo } from "react";
import "./GroupComponents.css";

const GroupComponent = () => {

  return (
    <div className='div-tasks'>
        <div className='circles'></div>
        <div className='tasks-assigned'>
            <p className="new-task">New Task Assigned</p>
            <p className="mini-cap">Mini-Capstone {'>'} Sprint 2</p>
        </div>
    </div>
  );
};

export default GroupComponent;
