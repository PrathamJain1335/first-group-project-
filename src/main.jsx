import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './pages/Login.css';     // Correct path to Login.css
import Login from './pages/Login.jsx';  // Correct path to Login.jsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
);
