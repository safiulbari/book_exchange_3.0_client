import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AddWantToRead extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wantToRead: [],
      title: '',
      author: '',
      price: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:5000/addToBooks', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        user_id: this.props.users.user.id,
        title: this.state.title,
        author: this.state.author,
        price: this.state.price
      })
    })
      .then(response => response.json())
      .then(book => {
        if (book.id) {

          fetch("http://localhost:5000/addToWTR", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              user_id: this.props.users.user.id,
              book_id: book.id,
              title: this.state.title,
              author: this.state.author,
              price: this.state.price
            })
          })
            .then(response => response.json())
            .then(msg => {
              if (msg === "Book Added To Want To Read") {
                this.props.history.push("/wantToRead");
              }
            });
        }
      })
  }


  render() {
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center mb-4">Add To Your Want To Read</h1>

              <form onSubmit={this.onSubmit} >
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Title" name="title"
                    value={this.state.title} onChange={this.onChange} />
                </div>

                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Author" name="author"
                    value={this.state.author} onChange={this.onChange} />
                </div>

                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Expected Price" name="price"
                    value={this.state.price} onChange={this.onChange} />
                </div>

                <input type="submit" className="btn btn-success btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

AddWantToRead.propTypes = {
  users: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps)(AddWantToRead);