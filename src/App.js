import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BasicTable from './pages/BasicTable';
import RootLayout from './pages/Root';
import WithAxios from './pages/WithAxios';
import AxiosRootLayout from './pages/AxiosRoots';
import NewCustomerPage from './pages/NewCustomerPage';
import WithReactTable from './pages/WithReactTable';
import ReactRootLayout from './pages/ReactTableRoots';




// import ErrorPage from './pages/ErrorPage';




const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <BasicTable /> },
      {
        path: 'axios',
        element: <AxiosRootLayout />,
        children: [
          {
            index: true, element: <WithAxios />,
          },
          { path: 'new', element:<NewCustomerPage/> },

        ],
      },
      {
        path: 'reacttable',
        element: <ReactRootLayout />,
        children: [
          {
            index: true, element: <WithReactTable />,
          },

        ],
      },
    ],
  }
]);


function App() {
  return (
      <RouterProvider router={router} />
    );
  }
  
  export default App;
