import React from 'react'; //from node module
import ReactDOM from 'react-dom/client'; //from node module
import './index.css'; //from src folder
// import App from './App'; //App.js
import reportWebVitals from './reportWebVitals';
// import Main from './Main';
import 'bootstrap/dist/css/bootstrap.css'
import Task from './Task';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Task />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
