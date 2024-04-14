import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>

);
/* Rectangle 4 */

// position: absolute;
// width: 1025px;
// height: 198px;
// left: 0px;
// top: 0px;

// background: url(16183189_GRADIENT_TEXTURE_WALLPAPER_.jpg), url(.jpg);
// border-radius: 14px;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
