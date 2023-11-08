import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DetailsCard, Error } from './components';
import './styles/index.css';
import { initFetchData } from './loaders';
import App from './App';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <App />,
    loader: () => initFetchData('formValue'),
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: '/:id/details',
        element: <DetailsCard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={<div className="lds-dual-ring"></div>}
    />
  </React.StrictMode>
);
