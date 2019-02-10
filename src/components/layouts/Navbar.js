import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/userActions';

class Navbar extends Component {
    onLogOut (e) {
        e.preventDefault();
        this.props.logoutUser();
        this.props.history.push('/');
    }
  render() {
    return <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container">

          <div className="navbar-brand">BookExchange</div>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/browse">
                  {" "}
         
                  Browse
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/collection">
                  {"  "}
                  Collection
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/wantToRead">
                  {" "}
                  Want To Read
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  {" "}
                  Dashboard{" "}
                </Link>
              </li>

              <li className="nav-item">
                <Link onClick={this.onLogOut.bind(this)} className="nav-link" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>;
  }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps, { logoutUser })(Navbar);