import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from 'react-moment';

class Rent extends Component {
  onConfirmRent = () => {
    fetch("http://localhost:5000/confirmRent", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        renter_name: this.props.users.user.name,
        renter_phone: this.props.users.user.phone,
        renter_address: this.props.users.user.address,
        title: this.props.books.book.title,
        author: this.props.books.book.author,
        price: this.props.books.book.price,
        rent_fee: 50,
        owner_name: this.props.books.book.name,
        owner_phone: this.props.books.book.phone,
        owner_address: this.props.books.book.address
      })
    })
  }
  render() {
    const { book } = this.props.books;
    const { user } = this.props.users;
    const date = new Date();
    return <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Price</th>
              <th scope="col">Rent Fee</th>
              <th scope="col">Receive date</th>
              <th scope="col">Return date</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user ? user.name : null}</td>
              <td>{user ? user.phone : null}</td>
              <td>{user ? user.address : null}</td>
              <td>{book ? book.title : null}</td>
              <td>{book ? book.author : null}</td>
              <td>{book ? book.price : null}</td>
              <td>50</td>
              <td><Moment format="DD/MM/YYYY">{date}</Moment></td>
              <td><Moment add={{days:7}} format="DD/MM/YYYY">{date}</Moment></td>
              <td>
                <Link onClick={(e) => this.onConfirmRent()} to="/rentAlert" className="btn btn-outline-warning">
                  Rent
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>;
  }
}

Rent.propTypes = {
  books: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  books: state.books,
  users: state.users
})

export default connect(mapStateToProps)(Rent);