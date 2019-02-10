import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Buy extends Component {

  onConfirmBuy = () => {
    fetch('http://localhost:5000/confirmBuy', {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        buyer_name: this.props.users.user.name,
        buyer_phone: this.props.users.user.phone,
        buyer_address: this.props.users.user.address,
        title: this.props.books.book.title,
        author: this.props.books.book.author,
        price: this.props.books.book.price,
        delivery_fee: 30,
        seller_name: this.props.books.book.name,
        seller_phone: this.props.books.book.phone,
        seller_address: this.props.books.book.address,
      })
    })
  }
  render() {
    const { book } = this.props.books
    const { user } = this.props.users
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
              <th scope="col">Delivery fee</th>
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
              <td>30</td>
              <td>
                <Link onClick={(e) => this.onConfirmBuy()} to="/buyAlert" className="btn btn-outline-success">
                  Buy
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>;
  }
}

Buy.propTypes = {
  books: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  books: state.books,
  users: state.users
})

export default connect(mapStateToProps)(Buy);