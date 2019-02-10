import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class BookDetails extends Component {
  
  render() {
    const { book } = this.props.books;
    // const { user } = this.props.users;
    const { reviews} = this.props.bookReviews;
    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-6">
                  
                </div>
                <div className="col-6">

                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="card card-body bg-info text-white mb-3">
                    <div className="row">
                      <div className="col-4 col-md-3 m-auto">

                      </div>
                    </div>
                    <div className="text-center">

                    
                      <h1 className="display-4 text-center">{book ? book.title : null}</h1>
                      <p className="lead text-center">Author: {book ? book.author: null}</p>
                      <p>Ratings: 4.5</p>
                      <p>
                        <a className="text-white p-2" href="https://www.goodreads.com/">
                          <i className="fab fa-goodreads fa-2x"></i>
                        </a>
                        <a className="text-white p-2" href="https://www.amazon.com/">
                          <i className="fab fa-amazon fa-2x"></i>
                        </a>

                      </p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-md-12">
                  <div className="card card-body bg-light mb-3">
                    <h3 className="text-center text-info">Summary</h3>
                    <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident fuga cum necessitatibus blanditiis vel,
                      officia facere porro esse numquam assumenda doloremque saepe aliquam nemo excepturi aliquid maiores! Excepturi,
                      libero repudiandae.
                    </p>

                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <h3 className="text-center text-info">Top Reviews</h3>
                  <ul className="list-group">
                    {
                      reviews && reviews[reviews.length - 1] ?
                        <li className="list-group-item">
                          <h4>{reviews[reviews.length - 1].reviewer}</h4>
                          <p>Dec 2018</p>

                          <p>
                            <strong>Review: </strong>{reviews[reviews.length - 1].review}
                          </p>
                        </li>
                        : null
                    }
                      {
                      reviews && reviews[reviews.length - 2] ?
                      <li className="list-group-item">
                        <h4>{reviews[reviews.length - 2].reviewer}</h4>
                        <p>Dec 2018</p>

                        <p>
                          <strong>Review: </strong>{reviews[reviews.length - 2].review}
                        </p>
                      </li>
                      : null
                      }
                    

                  </ul>
                </div>
                <div className="col-md-6">
                  <h3 className="text-center text-info">Owner's Info</h3>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <h4>{book ? book.name : null}</h4>
                      <p>Ratings: 4.4</p>
                      <p>
                        <strong>Other Books: </strong>The Hobbit</p>

                      <p>
                        <strong>About:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus dicta
                      enim excepturi laborum voluptatem nam provident quisquam facere. Quae?</p>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        </div>
    )
  }
}

BookDetails.propTypes = {
  books: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  bookReviews: PropTypes.object.isRequired,
}


const mapStateToProps = (state) => ({
  books: state.books,
  users: state.users,
  bookReviews: state.bookReviews
})
        


export default connect(mapStateToProps)(BookDetails);