/* eslint-disable no-unused-vars */
import React from 'react'

export default function Bookapp() {
  return (
    <div className="col-xl-5 col-lg-6 col-md-6 contactus-form " > 

    <div className="appointment-form form-wraper " >
        <h3 className="title">Book Appointment</h3>
        <form action="#">
            <div className="form-group">
                <select className="form-select form-control">
                    <option>Selecty Department</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                </select>
            </div>
            <div className="form-group">
                <select className="form-select form-control">
                    <option>Select Doctor</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                </select>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name"></input>
            </div>
            <div className="form-group">
                <input type="number" className="form-control" placeholder="Phone Numbers"></input>
            </div>
            <div className="form-group">
                <input type="date" className="form-control"></input>
            </div>
            <button type="submit" className="btn btn-secondary btn-lg">Appointment Now</button>
        </form>
    </div>
    </div>
  )
}
