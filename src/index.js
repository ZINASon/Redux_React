import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import Store from './Redux/Store/Store';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import render from "react-dom";


//const root1 = ReactDOM.createRoot(document.getElementById('root'));
/*ReactDOM.render(
  <Provider Store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);*/
ReactDOM.render(

  <React.StrictMode>
    <Provider Store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
