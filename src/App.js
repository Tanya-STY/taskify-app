import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
// import History from
import "./App.css";
import Sign_in from './Components/sign_in/sign_in.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sign_in/>} />
        <Route path="Homepage" element={<Homepage />} />
        {/* <Route path="/history" element={<History />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
