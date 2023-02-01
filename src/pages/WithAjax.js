import { Link } from "react-router-dom";

import Table from "../components/TableAjax";


function WithAjax() {
  return (
    <>
    <h1>Ajax table Page</h1>
    <p>
    go to <Link to="/"> Simple table page</Link>.
      </p>
      <div>
      <Table/>
    </div>
    </>
  );
}

export default WithAjax;