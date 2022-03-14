import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/app.scss';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);

