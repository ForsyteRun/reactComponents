import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Uncontrolled, ReactHookForm } from './pages';
import { Provider } from 'react-redux';
import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/form',
    element: <ReactHookForm />,
  },
  {
    path: '/uncontrolled',
    element: <Uncontrolled />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
