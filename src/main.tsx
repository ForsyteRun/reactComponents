import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DetailsCard, Error } from './components';
import './styles/index.css';
import { detailsLoader, initFetchData } from './loaders';
import App from './App';
import { storageData } from './types';
import { Provider } from 'react-redux';
import { store } from './store';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <App />,
    loader: () => initFetchData(storageData.formValue),
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: '/:id/details',
        element: <DetailsCard />,
        loader: detailsLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider
        router={router}
        fallbackElement={<div className="lds-dual-ring"></div>}
      />
    </Provider>
  </React.StrictMode>
);
