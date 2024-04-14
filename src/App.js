import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
// import History from
import Taskbox from "./Components/Taskbox/Taskbox";
import "./App.css";
import Sign_in from './Components/sign_in/sign_in.js';
import Chat from './Components/Chat/Chat.js';
import Settings from './Components/Settings/Setting.js'
import HomepageBanner from "./Components/HomepageBanner/HomepageBanner.js";
import NotificationsAlerts from './Components/Notifications/NotificationAlerts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Notification" element={<NotificationsAlerts />} />

      </Routes>
      {/* <Routes>
        <Route path='/' element={<Sign_in/>} />
        <Route path="Homepage" element={<Homepage />} />
        <Route path="Chat" element={<Chat />} />
        <Route path="Settings" element={<Settings />} />
        <Route path="HomepageBanner" element={<HomepageBanner />} />
        {/* <Route path="/history" element={<History />} /> */}
        <Route path="/test" element={<Taskbox />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
