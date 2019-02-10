import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getBook } from '../../actions/bookActions';
import { getExchangeBooks } from '../../actions/bookActions';
import { getBuyBook } from '../../actions/bookActions';
import { getRentBook } from '../../actions/bookActions';
import { getReviewsBook } from '../../actions/bookActions';
import { getReviewsDetails } from '../../actions/bookActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: "",
      location: ""
    };
    this.onSelectLocation = this.onSelectLocation.bind(this);
  }

  onDetails = key => {
    fetch(`http://localhost:5000/getBookDetails/${key}`)
    .then(response => response.json())
    .then(book => {
      if (book) {
        this.props.getBook(key, this.props.history)
        const id = {
          book_id: book.book_ID
        }
        this.props.getReviewsDetails(id, this.props.history);
      }
    })
  };

  
  onBuy = key => {
    this.props.getBuyBook(key, this.props.history);
  };

  onRent = key => {
    this.props.getRentBook(key, this.props.history);
  };
  

  onReview = key => {
    fetch(`http://localhost:5000/getBookDetails/${key}`)
    .then(response => response.json())
    .then(book => {
      if(book) {
        this.props.getBook(key, this.props.history)
        const id = {
          book_id: book.book_ID
        }
        this.props.getReviewsBook(id, this.props.history)
      }
    })
  };
  

  onExchange = key => {
    fetch(`http://localhost:5000/getBookDetails/${key}`)
      .then(response => response.json())
      .then(book => {
        if (book) {        
          this.props.getBook(key, this.props.history);
          const id = {
            owner_id: book.user_id,
            user_id: this.props.users.user.id
          };
          this.props.getExchangeBooks(id, this.props.history);
        }
      });
  };

  componentDidMount() {
    fetch("http://localhost:5000/getBooks")
      .then(response => response.json())
      .then(books => {
        if (books) {
          this.setState({ books });
        }
      });
  }

  onSearch = e => {
    this.setState({ search: e.target.value });
  };

  onSelectLocation = val => {
    this.setState({ location: val });
  };

  render() {
    const { books, search, location } = this.state;

    const filteredBooks = books.filter(book => {
      return book.title.toLowerCase().includes(search.toLowerCase());
    });

    const filteredLocation = books.filter(book => {
      return book.address.toLowerCase().includes(location.toLowerCase());
    });

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Browse Books</h1>
              <p className="lead text-center">
                All of your favouite books are here
              </p>
              {
                // Location Dropdown
              }

              <select
                onChange={e => this.onSelectLocation(e.target.value)}
                className="custom-select mb-3"
                id="inlineFormCustomSelect"
              >
                <option value="all">Filter By Location</option>
                <option value="dhanmondi">Dhanmondi</option>
                <option value="badda">Badda</option>
                <option value="farmgate">Farmgate</option>
                <option value="mohammadpur">Mohammadpur</option>
                <option value="mirpur">Mirpur</option>
              </select>

              {
                // Book item
              }
              <div className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={this.onSearch}
                />
              </div>

              {search || location === "all"
                ? filteredBooks.map(book => {
                    return (
                      <div
                        key={book.book_id}
                        className="card card-body bg-light mb-3"
                      >
                        <div className="row">
                          <div className="col-2" />
                          <div className="col-lg-6 col-md-4 col-8">
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <p>{book.price} Tk</p>
                            <Link
                              onClick={e => this.onDetails(book.book_id)}
                              to="/details"
                              className="btn btn-info"
                            >
                              Details
                            </Link>
                          </div>
                          <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                              <Link
                                onClick={e => this.onExchange(book.book_id)}
                                to="/exchange"
                                className="btn btn-outline-primary text-center mb-1"
                              >
                                Exchange
                              </Link>
                              <Link
                                onClick={e => this.onBuy(book.book_id)}
                                to="/buy"
                                className="btn btn-outline-success text-center mb-1"
                              >
                                Buy
                              </Link>
                              <Link
                                onClick={e => this.onRent(book.book_id)}
                                to="/rent"
                                className="btn btn-outline-warning text-center mb-1"
                              >
                                Rent
                              </Link>
                              <Link
                                onClick={e => this.onReview(book.book_id)}
                                to="/review"
                                className="btn btn-outline-info text-center"
                              >
                                Rate & Review
                              </Link>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : filteredLocation.map(book => {
                    return (
                      <div
                        key={book.book_id}
                        className="card card-body bg-light mb-3"
                      >
                        <div className="row">
                          <div className="col-2" />
                          <div className="col-lg-6 col-md-4 col-8">
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <p>{book.price} Tk</p>
                            <Link
                              onClick={e => this.onDetails(book.book_id)}
                              to="/details"
                              className="btn btn-info"
                            >
                              Details
                            </Link>
                          </div>
                          <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                              <Link
                                onClick={e => this.onExchange(book.book_id)}
                                to="/exchange"
                                className="btn btn-outline-primary text-center mb-1"
                              >
                                Exchange
                              </Link>
                              <Link
                                onClick={e => this.onBuy(book.book_id)}
                                to="/buy"
                                className="btn btn-outline-success text-center mb-1"
                              >
                                Buy
                              </Link>
                              <Link
                                onClick={e => this.onRent(book.book_id)}
                                to="/rent"
                                className="btn btn-outline-warning text-center mb-1"
                              >
                                Rent
                              </Link>
                              <Link
                                onClick={e => this.onReview(book.book_id)}
                                to="/review"
                                className="btn btn-outline-info text-center"
                              >
                                Rate & Review
                              </Link>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Browse.propTypes = {
  getBook: PropTypes.func.isRequired,
  getExchangeBooks: PropTypes.func.isRequired,
  getBuyBook: PropTypes.func.isRequired,
  getRentBook: PropTypes.func.isRequired,
  getReviewsBook: PropTypes.func.isRequired,
  getReviewsDetails: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  books: PropTypes.object.isRequired,
  bookReviews: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  books: state.books,
  users: state.users,
  bookReviews: state.bookReviews
})

export default connect(mapStateToProps, {  getBook, getExchangeBooks, getBuyBook, getRentBook, getReviewsBook, getReviewsDetails })(Browse);