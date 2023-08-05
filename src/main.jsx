import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Use createRoot from 'react-dom/client'

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
