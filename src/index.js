import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename='/covid'>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);