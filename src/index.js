import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Introduction from './Authentification/Introduction';
import Connexion from './Authentification/Connexion';
import Home from './Home Component/Home';
import Inscription from './Authentification/Inscription';
import CopyToClipBoard from './CopyToClipBoard/CopyToClipBoard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CopyToClipBoard/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
