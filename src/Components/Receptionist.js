import React from 'react'
import { useNavigate } from "react-router-dom";



const Receptionist = () => {
  const navigate = useNavigate();
  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-3">
          <label for="inputfname">First Name</label>
          <input type="fname" className="form-control" id="inputfname" placeholder="First Name" />
        </div>
        <div className="form-group col-md-3">
          <label for="inputLname">Last Name</label>
          <input type="lname" className="form-control" id="inputlname" placeholder="Last Name" />
        </div>
        <div className="form-group col-md-3">
          <label for="mobno">Mobile No</label>
          <input type="mobno" className="form-control" id="inputmobno" placeholder="Mobile No" />
        </div>
        <div className="form-group col-md-3">
          <label  for="inputAddress">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-2">
          <label for="inputCity">City</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-md-2">
          <label for="inputBtype">Blood Type</label>
          <select id="inputBtype" className="form-control">
            <option selected>Choose...</option>
            <option>A+</option>
            <option>B+</option>
            <option>A-</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-2">
          <label for="Doctor">Assigned Doctor</label>
          <select id="Doctor" className="form-control">
            <option selected>Choose...</option>
            <option>Dr. P.M. Shinde</option>
            <option>Dr. R.D. Darade</option>
            <option>Dr. R.D.Jadhav</option>
            <option>Dr. M.D. Shah</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Submit Info.</button>
    </form>
  )
}

export default Receptionist;
