
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Taskbox from "./Components/Taskbox/Taskbox";
import "./App.css";
import Sign_in from './Components/sign_in/sign_in.js';
import Chat from './Components/Chat/Chat.js';
import Settings from './Components/Settings/Setting.js'
import HomepageBanner from "./Components/HomepageBanner/HomepageBanner.js";

import TeamCreateTask from './Components/Task_forms/Team_Create_Task';
import TeamViewTask from './Components/Task_forms/Team_View_Task';
import UserCreateTask from './Components/Task_forms/User_Create_Task';
import UserViewTask from './Components/Task_forms/User_View_Task';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sign_in/>} />
        <Route path="Homepage" element={<Homepage />} />
        <Route path="Chat" element={<Chat />} />
        <Route path="Settings" element={<Settings />} />
        <Route path="HomepageBanner" element={<HomepageBanner />} />
        <Route path="/test" element={<Taskbox />} />
        <Route path="/TeamCreateTask" element={<TeamCreateTask />} />
        <Route path="/TeamViewTask" element={<TeamViewTask />} />
        <Route path="/UserCreateTask" element={<UserCreateTask />} />
        <Route path="/UserViewTask" element={<UserViewTask />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
