import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ReactGA from 'react-ga4'; 

// Define your GA4 Measurement ID here
const TRACKING_ID = 'G-3LZ65DKNFX'; // <-- REPLACE with your actual ID

// 2. INITIALIZE GA4
ReactGA.initialize(TRACKING_ID);

// 3. TRACK INITIAL PAGE VIEW
// We use window.location.pathname which is the landing page path
ReactGA.send({ hitType: 'pageview', page: window.location.pathname }); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
