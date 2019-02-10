import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getReviewsBook } from '../../actions/bookActions';
class Review extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: this.props.users.user.id,
      reviewer: this.props.users.user.name,
      review: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    e.preventDefault()
    this.setState({[e.target.name] : e.target.value})
  }

  onSubmit(e) {
    e.preventDefault() 
    fetch("http://localhost:5000/addReview", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        review: this.state.review,
        book_id: this.props.books.book.book_ID,
        user_id: this.state.user_id,
        reviewer: this.state.reviewer
      })
    })
      .then(response => response.json())
      .then(reviews => {
        if (reviews) {
          const id = { book_id: reviews[0].book_id };
          this.props.getReviewsBook(id, this.props.history);
          this.setState({ review: "" });
        }
      });
  }
  
  render() {
    
    const {book} = this.props.books
    const {reviews} = this.props.bookReviews
    return (
<div className="feed">
  <div className="container">
    <div className="row">
      <div className="col-md-12">

      <div className="post-form mb-3">
      <div className="card card-info">
      <div className="card-header bg-info text-white">
      Write a short review for <span><em>{book ? book.title : null}</em></span> ......
      </div>
      <div className="card-body">
      <form  onSubmit= {this.onSubmit}>
        <div className="form-group">
          <textarea type="text" name="review" className="form-control form-control-lg" placeholder="Your review"
          onChange = {this.onChange} value = {this.state.review}></textarea>
        </div>
        <button type="submit" className="btn btn-info">Submit</button>
        {
          // Not Implemented with back end
          // -------------------------

      //     <span className="float-right">
        
      //     <div>
      //     <div className="form-row align-items-center">
      //     <div className="col-auto my-1">

      //     <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
      //     <option select='true'>Ratings...</option>
      //     <option value="1">1</option>
      //     <option value="2">2</option>
      //     <option value="3">3</option>
      //     <option value="3">4</option>
      //     <option value="3">5</option>
      //     </select>
      //   </div>

      //   <div className="col-auto my-1">
      //   <button type="submit" className="btn btn-info">Submit</button>
      // </div>
      
      // </div> 
  

      // </div>
      // </span>
    }
    </form>
    </div>
    </div>
    </div>


    <div className="reviews">

      {
        reviews?
        reviews.map(review => {
          return <div key={review.id} className="card card-body mb-3">
              <div className="row">
                <div className="col-md-2">
                  <br />
                  <h3 className="text-center">{review.reviewer}</h3>
                </div>
                <div className="col-md-10">
                  <p className="lead">{review.review}</p>
                  {
                    // Not Implemented with back-end
                    // -------------------------
                    // <span>
                    //   <button type="button" className="btn btn-light mr-1">
                    //   <i className="text-info fas fa-thumbs-up" />
                    //   <span className="badge badge-light">4</span>
                    //   </button>
                    //   <button type="button" className="btn btn-light mr-1">
                    //   <i className="text-secondary fas fa-thumbs-down" />
                    //   </button>
                    //   <Link to="/comments" className="btn btn-info mr-1">
                    //   Comments
                    //   </Link>
                    // </span>
                  }
                  {
                    // Not Implemented with back-end
                    // -------------------------
                    // <span className="float-right">
                    //   <span className="fa fa-star checked" />
                    //   <span className="fa fa-star checked" />
                    //   <span className="fa fa-star checked" />
                    //   <span className="fa fa-star" />
                    //   <span className="fa fa-star" />
                    // </span>
                  }
                </div>
              </div>
            </div>;
        }) : null 
      }

    </div>
    </div>
    </div>
  </div>
</div>
    )
  }
}

Review.propTypes = {
  books: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  bookReviews: PropTypes.object.isRequired,
  getReviewsBook: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  books: state.books,
  users: state.users,
  bookReviews: state.bookReviews
})

export default connect(mapStateToProps, {getReviewsBook})(Review);