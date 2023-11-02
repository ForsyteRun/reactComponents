import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/Error';
import './styles/index.css';
import App from './App';
import { initFetchData } from './loaders/fetchData';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <App />,
    loader: () => initFetchData('formValue'),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider
        router={router}
        fallbackElement={<div className="lds-dual-ring"></div>} //TODO
      />
    </ErrorBoundary>
  </React.StrictMode>
);
