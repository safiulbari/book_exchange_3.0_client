import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class RentAlert extends Component {
  render() {
    return (
      <div>
        {alert('Rent Placed Successfully!!')}

        <div className="row">
          <div className="col-6">

          </div>
          <div className="col-6">
            <Link to="/browse" className="btn btn-light mb-4 float-left">Back To Browse</Link>
          </div>
        </div>

      </div>
    )
  }
}
