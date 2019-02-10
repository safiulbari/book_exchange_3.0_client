import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Exchange extends Component {

  onConfirmExchange = () => {
    fetch("http://localhost:5000/confirmExchange", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title_1: this.props.books.book.title,
        author_1: this.props.books.book.author,
        price_1: this.props.books.book.price,
        user_1: this.props.books.book.name,
        title_2: this.props.exchange.exchangeBooks.title,
        author_2: this.props.exchange.exchangeBooks.author,
        price_2: this.props.exchange.exchangeBooks.price,
        user_2: this.props.users.user.name
      })
    });
  }

  render() {
    const { exchangeBooks } = this.props.exchange
    const { book } = this.props.books
    return (
      <div>
        {
          exchangeBooks ? 
            <div>
              <h4 className="display-8 text-center">
                Books available for exchange
        </h4>
              <br />
              <h6>
                {" "}
                Exchange <strong>
                  {book ? book.title : null}
                </strong> with the following
        </h6>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Price</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{exchangeBooks ? exchangeBooks.title : null}</td>
                    <td>{exchangeBooks ? exchangeBooks.author : null}</td>
                    <td>{exchangeBooks ? exchangeBooks.price : null}</td>
                    <td>
                      <Link onClick={e => this.onConfirmExchange()} to="/exchangeAlert" className="btn btn-outline-primary">
                        Exchange
                </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> : <h6 className="text-center">Sorry! No books available for exchange at this moment</h6>
        }
      </div>
    )
  }
}

Exchange.propTypes = {
  exchange: PropTypes.object.isRequired,
  books: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  exchange: state.exchange,
  books: state.books,
  users: state.users
})

export default connect(mapStateToProps)(Exchange);