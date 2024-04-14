import React from 'react';
import './App.css';
import TaskForms from './Components/Task_forms/Task_forms';
import TeamCreateTask from './Components/Task_forms/Team_Create_Task';
import TeamViewTask from './Components/Task_forms/Team_View_Task';
import UserCreateTask from './Components/Task_forms/User_Create_Task';
import UserViewTask from './Components/Task_forms/User_View_Task';

function App() {
  return (
    <div className="App">
      {/* <TaskForms /> */}
      {/* <TeamCreateTask/> */}
      {/* <TeamViewTask/> */}
      <UserCreateTask/>
      {/* <UserViewTask/> */}
    </div>
  );
}

export default App;
