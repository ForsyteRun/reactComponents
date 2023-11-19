import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { DetailsCard, Error } from './components';
import { store } from './store';
import './styles/index.css';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <App />,
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
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider
      router={router}
      fallbackElement={<div className="lds-dual-ring"></div>}
    />
  </Provider>
  // </React.StrictMode>
);
