import { useNavigate } from 'react-router-dom';

import classes from './CustomerForm.module.css';
import Card from './UI/Card';


function CustomerForm({ method, event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }


  return (
    <>
      <h2>Add a Client</h2>
      <Card>
        <form className={classes.form}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label className='form-label' htmlFor="orderNo">Order No</label>
                  <input
                    className="form-control"
                    type="text"
                    required='required'
                    placeholder=' Ordering number'
                    name='orderNo'
                            
                  />
                  <label className='form-label' htmlFor="date">Date</label>
                  <input
                    className="form-control"
                    type="text"
                    required='required'
                    placeholder='11/01/22'
                    name='date'
                  />
                </td>
                <td>

                  <label className='form-label' htmlFor="customer">Customer</label>
                  <input
                    className="form-control"
                    type="text"
                    required='required'
                    name='customer'
                    placeholder='Customer name'
                  />
                    

                  <label className='form-label' htmlFor="trackingNo">Tracking No</label>
                  <input
                    className="form-control"
                    type="text"
                    required='required'
                    name='trackingNo'
                    placeholder='Tracking No'
                  />
                </td>
                <td>

                  <label className='form-label' htmlFor="status">Status</label>
                  <select
                    className="form-select"
                    name="status"
                    id="status"
                    required='required'
                    form="statusform"
                    placeholder='Change Status'
                  >
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="inTransit">In Transit</option>
                  </select>
                  <label className='form-label' htmlFor="consignee">Consignee</label>
                  <input
                    className="form-control"
                    type="text"
                    name='consignee'
                    required='required'
                    placeholder='Consignee name'
                  />
                </td>
              </tr>
            </tbody>
          </table>
            <h2>New order for shipment</h2>
            <div className={classes.actions}>
            <button className="btn btn-outline-secondary" type="button" onClick={cancelHandler}>Cancel</button>
            <button className="btn btn-outline-success" type='subbmit'>Add new</button>
          </div>
        </form>
      </Card>
    </>
  );
}
export default CustomerForm;
