import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/userActions'

class Dashboard extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      
      collection : [],
      wantToRead : []
    }
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete(e) {
    e.preventDefault();
    const confirmDelete = prompt('This Will Delete Everything! Are You Sure?');
    if (confirmDelete === 'yes') {
      fetch('http://localhost:5000/delete', {
        method: 'delete',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          id: this.props.users.user.id
        })
      })
        .then(response => response.json())
        .then(msg => {
          if (msg === 'Account removed') {
            this.props.logoutUser()
            this.props.history.push('/');
          }
        })
    } else {
      this.props.history.push('/dashboard');
    }
    
  }
  componentDidMount() {
    fetch('http://localhost:5000/getCollection',{
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        id: this.props.users.user.id
      })
    })
      .then(response => response.json())
      .then(collection => {
        if (collection) {
          this.setState({ collection })
        }
      })
  }
  componentWillMount() {
    fetch('http://localhost:5000/getWTR', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        id: this.props.users.user.id
      })
    })
      .then(response => response.json())
      .then(wantToRead => {
        if (wantToRead) {
          this.setState({ wantToRead })
        }
      })
  }
  render() {
    const { user } = this.props.users;
    const { collection, wantToRead } = this.state;
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              <p className="lead">Welcome <strong>{user ? user.name : null}</strong>
              </p>
                { 
                  // Dashboard Actions 
                }
          <div className="btn-group mb-4" role="group">
                <Link to="/edit-profile" className="btn btn-light">
                  <i className="fas fa-user-circle text-info mr-1"></i> Edit Profile</Link>
                <Link to="/add-collection" className="btn btn-light">
                  <i className="fas fa-plus text-info mr-1"></i>
                   Collection</Link>
                <Link to="/add-want-to-read" className="btn btn-light">
                  <i className="fas fa-plus text-info mr-1"></i>
                   Want To Read</Link>
              </div>
                    {
                      // Collection 
                    }
                  
              <div>
                <h4 className="mb-2">Recent Collection</h4>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                  {
                    collection.map(book => {
                      return (


                        <tbody key={book.title}>
                          <tr >
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>

                          </tr>

                        </tbody>

                      )
                    })
                  }
                    </table>
                
            </div>

              {
                // Want to read

              }
            <div>
                
                <h4 className="mb-2">Recent Want To Read</h4>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  {
                    wantToRead.map(book => {
                      return (


                        <tbody key={book.title}>
                          <tr >
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>

                          </tr>

                        </tbody>

                      )
                    })
                  }
                </table>
            </div>

              <div styles="margin-bottom: 60px;">
                <button 
                  onClick={this.onDelete}
                  className="btn btn-danger">
                  Delete My Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  users : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  users : state.users
})

export default connect(mapStateToProps, { logoutUser })(Dashboard);