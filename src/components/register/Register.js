import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/userActions'; 

class Register extends Component {
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

  onChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit (e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      address: this.state.address
    }

    this.props.registerUser(newUser, this.props.history);

    

  }
  render() {

    
    return (
      <div className="register">
        
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Register</h1>
              <p className="lead text-center">Create your BookExchange account</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Name" name="name"
                    value={this.state.name} onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email"
                    value={this.state.email} onChange={this.onChange} />              
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" 
                    value={this.state.password} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Phone" name="phone" value={this.state.phone} onChange={this.onChange} />
                </div>

                <div className="form-group">
                  <textarea type="text" className="form-control form-control-lg" placeholder="Address" name="address" value={this.state.address} onChange={this.onChange} />
                </div>

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps, { registerUser })(withRouter(Register));