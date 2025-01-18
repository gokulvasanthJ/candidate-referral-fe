import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CandidateContextProvider from './contexts/CandidateContext';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CandidateContextProvider>
    <App />
  </CandidateContextProvider>
);
