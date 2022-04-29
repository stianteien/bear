import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Message from './Message';
import Easter from './Easter';
import Rules from './Rules';
import Brainteaser from './Brainteaser';
import reportWebVitals from './reportWebVitals';
import Upload from './Upload';
import FileUploadComponent from './FileUpload';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <FileUploadComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
