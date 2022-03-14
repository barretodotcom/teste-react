import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOrXr-cblYh87wY0mZ1Thbzu1XejcEAsE",
  authDomain: "teste-react-5af5c.firebaseapp.com",
  projectId: "teste-react-5af5c",
  storageBucket: "teste-react-5af5c.appspot.com",
  messagingSenderId: "986097163675",
  appId: "1:986097163675:web:ad429734ed3a3ddee0153e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
