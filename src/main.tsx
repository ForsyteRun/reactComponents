import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { App } from './components';
import ErrorBoundary from './components/Error';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
