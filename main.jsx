// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming you have an App component
import './index.css'; // Optional: If you have global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
