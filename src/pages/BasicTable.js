import { Link } from "react-router-dom";

import Table from "../components/Table";


function BasicTable() {
  return (
    <>
    <h1>Simple table Page</h1>
    <p>
    go to <Link to="/ajax"> Ajax table page</Link>.
      </p>
      <div>
      <Table/>
    </div>
    </>
  );
}

export default BasicTable;