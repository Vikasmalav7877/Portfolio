import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '../css/style.css';
import '../css/style-switcher.css';
import '../css/skins/color-1.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
