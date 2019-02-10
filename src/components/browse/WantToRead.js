import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBook, getReviewsBook, getReviewsDetails } from "../../actions/bookActions";

class WantToRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wantToRead: [],
      search: ""
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/getWtrAll", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: this.props.users.user.id
      })
    })
      .then(response => response.json())
      .then(wantToRead => {
        if (wantToRead) {
          this.setState({ wantToRead });
        }
      });
  }

  onDetails = key => {
    fetch(`http://localhost:5000/getBookDetails/${key}`)
      .then(response => response.json())
      .then(book => {
        if (book) {
          this.props.getBook(key, this.props.history);
          const id = {
            book_id: book.book_ID
          };
          this.props.getReviewsDetails(id, this.props.history);
        }
      });
  };

  onRemove = key => {
    fetch(`http://localhost:5000/removeBook/${key}`, {
      method: "delete"
    })
      .then(response => response.json())
      .then(msg => {
        console.log(msg);
        this.componentDidMount();
      });
  };

  onSearch = e => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  };
  render() {
    const { wantToRead, search } = this.state;
    const filteredwantToRead = wantToRead.filter(book => {
      return book.title.toLowerCase().includes(search.toLowerCase());
    });
    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Want To Read</h1>
              <p className="lead text-center">Your WishList Goes Here</p>
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

              {filteredwantToRead.map(book => {
                return (
                  <div
                    key={book.title}
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
                          <br />
                          <br />

                          <Link
                            onClick={e => this.onRemove(book.book_id)}
                            to="/wantToRead"
                            className="btn btn-outline-danger text-center"
                          >
                            Remove
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

WantToRead.propTypes = {
  getReviewsBook: PropTypes.func.isRequired,
  getReviewsDetails: PropTypes.func.isRequired,
  getBook: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  books: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  users: state.users,
  books: state.books
})

export default connect(mapStateToProps, {getBook, getReviewsBook, getReviewsDetails})(WantToRead);