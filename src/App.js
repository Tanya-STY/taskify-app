import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
// import History from
import "./App.css";
import Sign_in from './Components/sign_in/sign_in.js';
import Chat from './Components/Chat/Chat.js';
import Settings from './Components/Settings/Setting.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sign_in/>} />
        <Route path="Homepage" element={<Homepage />} />
        <Route path="Chat" element={<Chat />} />
        <Route path="Settings" element={<Settings />} />
        {/* <Route path="/history" element={<History />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
