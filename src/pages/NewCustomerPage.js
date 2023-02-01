import { Link } from "react-router-dom";

import CustomerForm from "../components/CustomerForm";


function NewCustomerPage() {
  return (
    <>
    <h1>My New NewCustomer Page</h1>
    <p>
    go to <Link to="/"> All Customer page</Link>.
      </p>
      <CustomerForm/>
    </>
  );
}

export default NewCustomerPage;