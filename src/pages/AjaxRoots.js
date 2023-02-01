import { Outlet } from "react-router-dom";

import AjaxNavigation from '../components/AjaxNavigation';

function AjaxRootLayout() {
  return (
    <>
      <AjaxNavigation />  
      <Outlet />      
    </>
  );
}

export default AjaxRootLayout;