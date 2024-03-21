import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from "recoil";
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollTop from './hooks/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
      <ScrollTop />
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
