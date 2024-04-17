import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import "./App.css";
import Sign_in from './Components/sign_in/sign_in.js';
import Sign_up from "./Components/sign_up/sign_up.js";
import Chat from './Components/Chat/Chat.js';
import Settings from './Components/Settings/Setting.js';
import HomepageBanner from "./Components/HomepageBanner/HomepageBanner.js";
import NotificationsAlerts from './Components/Notifications/NotificationAlerts';
import TeamCreateTask from './Components/Task_forms/Team_Create_Task';
import TeamViewTask from './Components/Task_forms/Team_View_Task';
import UserCreateTask from './Components/Task_forms/User_Create_Task';
import UserViewTask from './Components/Task_forms/User_View_Task';
import History from "./Components/History/History.js";
import Navbar from "./Components/Navbar/Navbar.js";
import Homepage_Team from './Components/Homepage_Team/Homepage_Team.js';

function App() {
  return (
    <BrowserRouter>
      <InnerApp />
    </BrowserRouter>
  );
}

function InnerApp() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/Sign_in' || location.pathname === '/Sign_up';

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/Notification" element={<NotificationsAlerts />} />
        <Route path='/' element={<Sign_in/>} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/HomepageBanner" element={<HomepageBanner />} />
        <Route path="/TeamCreateTask" element={<TeamCreateTask />} />
        <Route path="/TeamViewTask" element={<TeamViewTask />} />
        <Route path="/UserCreateTask" element={<UserCreateTask />} />
        <Route path="/UserViewTask" element={<UserViewTask />} />
        <Route path="/History" element={<History />} />
        <Route path="/Sign_up" element={<Sign_up/>}/>
        <Route path="/Sign_in" element={<Sign_in/>}/>
        <Route path="/Homepage_Team" element={<Homepage_Team/>}/>

      </Routes>
    </>
  );
}

export default App;
