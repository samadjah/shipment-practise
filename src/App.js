import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BasicTable from './pages/BasicTable';
import RootLayout from './pages/Root';
import WithAjax from './pages/WithAjax';
import AjaxRootLayout from './pages/AjaxRoots';
import NewCustomerPage from './pages/NewCustomerPage';



// import ErrorPage from './pages/ErrorPage';




const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <BasicTable /> },
      {
        path: 'ajax',
        element: <AjaxRootLayout />,
        children: [
          {
            index: true, element: <WithAjax />,
          },
          { path: 'new', element:<NewCustomerPage/> },

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
