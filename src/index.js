import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBKh_B1ptVoly594b6iR-p91k5GXQxM_W8',
  authDomain: 'coderhouse-ecommerce-15a5d.firebaseapp.com',
  projectId: 'coderhouse-ecommerce-15a5d',
  storageBucket: 'coderhouse-ecommerce-15a5d.appspot.com',
  messagingSenderId: '452843418408',
  appId: '1:452843418408:web:ec830a227204c7584dd61d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
