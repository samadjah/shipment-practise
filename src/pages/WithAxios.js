import { Link } from "react-router-dom";

import Table from "../components/TableAxios";


function WithAxios() {
  return (
    <>
    <h1>Axios table Page</h1>
    <p>
    go to <Link to="/"> Simple table page</Link>.
      </p>
      <div>
      <Table/>
    </div>
    </>
  );
}

export default WithAxios;