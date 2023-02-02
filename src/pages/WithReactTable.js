import { Link } from "react-router-dom";

import Shipmentsss from "../components/TableReactTable";


function WithReactTable() {
  return (
    <>
    <h1>React-table Page</h1>
    <p>
    go to <Link to="/"> Simple table page</Link>.
      </p>
      <div>
      <Shipmentsss/>
    </div>
    </>
  );
}

export default WithReactTable;