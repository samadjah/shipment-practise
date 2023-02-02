import { Outlet } from "react-router-dom";

import AxiosNavigation from '../components/AxiosNavigation';

function AxiosRootLayout() {
  return (
    <>
      <AxiosNavigation />  
      <Outlet />      
    </>
  );
}

export default AxiosRootLayout;