import { Outlet } from "react-router-dom";

import ReactTableNavigation from '../components/ReactTableNavigation';

function ReactTableRoots() {
  return (
    <>
      <ReactTableNavigation />  
      <Outlet />      
    </>
  );
}

export default ReactTableRoots;