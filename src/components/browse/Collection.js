import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBook, getReviewsBook, getReviewsDetails } from "../../actions/bookActions";

class Collection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: [],
      search: ''
      
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:5000/getCollectionAll', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
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

  

  onRemove = (key) => {
    fetch(`http://localhost:5000/removeBook/${key}`, {
      method: 'delete'
    })
    .then(response => response.json())
    .then(msg => {
      console.log(msg)
      this.componentDidMount();
    })
  }

  onSearch = (e) => {
    e.preventDefault()
    this.setState({ search: e.target.value })
  }
  render() {
    const { collection, search } = this.state;
    const filteredCollection = collection.filter(book => {
      return book.title.toLowerCase().includes(search.toLowerCase())
    })
    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Collection</h1>
              <p className="lead text-center">Books that you own are here</p>
              {
                // Book item
              }
              <div className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Search" aria-label="Search" 
                onChange={this.onSearch}/>
              </div>
                
              
              {
                filteredCollection.map(book => {
                  return <div key={book.title} className="card card-body bg-light mb-3">
                      <div className="row">
                        <div className="col-2" />
                        <div className="col-lg-6 col-md-4 col-8">
                          <h3>{book.title}</h3>
                          <p>{book.author}</p>
                          <p>{book.price} Tk</p>
                          <Link onClick={(e) => this.onDetails(book.book_id)} to="/details" className="btn btn-info">
                            Details
                          </Link>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                          <ul className="list-group">
                            <br />
                            <br />
                            
                            <Link onClick={(e) => this.onRemove(book.book_id)} to="/collection" className="btn btn-outline-danger text-center">
                            Remove
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </div>;
                })
              }

              

            </div>
          </div>
        </div>
      </div>
    )
  }
}

Collection.propTypes = {
  getBook: PropTypes.func.isRequired,
  getReviewsBook: PropTypes.func.isRequired,
  getReviewsDetails: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  books: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  users: state.users,
  books: state.books
})

export default connect(mapStateToProps, { getBook, getReviewsBook, getReviewsDetails})(Collection);