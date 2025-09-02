import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { LoadoutProvider } from './context/Loadout/LoadoutContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadoutProvider>
      <App />
    </LoadoutProvider>
  </StrictMode>
);
