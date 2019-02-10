import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/userActions';

class EditProfile extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      phone: '',
      address: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();

    const updateUserData = {
      id: this.props.users.user.id,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      address: this.state.address
    }
    
    this.props.updateUser(updateUserData, this.props.history)



  }
  render() {
    return <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Edit Your Profile</h1>

              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Name" name="name" value={this.state.name} onChange={this.onChange} />
                </div>

                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" placeholder="test@mail.com" name="email" value={this.state.email} onChange={this.onChange} />
                </div>

                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
                </div>

                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Phone" name="phone" value={this.state.phone} onChange={this.onChange} />
                </div>

                <div className="form-group">
                <textarea type="text" className="form-control form-control-lg" placeholder="Address" name="address" value={this.state.address} onChange={this.onChange}/>
                </div>

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>;
  }
}

EditProfile.propTypes = {
  users: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps, {updateUser})(EditProfile);