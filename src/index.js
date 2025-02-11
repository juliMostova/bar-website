import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom';
import './serverData/i18n/i18n';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter future={{ v7_startTransition: true }}>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
