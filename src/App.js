import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
// import History from
import TaskBox from "./Components/TaskBox/TaskBox";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/history" element={<History />} /> */}
        <Route path="/testtask" element={<TaskBox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
