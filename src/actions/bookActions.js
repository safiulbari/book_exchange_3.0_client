import { SET_CURRENT_BOOK, GET_EXCHANGE_BOOKS, GET_REVIEWS_BOOK } from './types';
import axios from 'axios';

export const getExchangeBooks = (id, history) => dispatch => {
  axios.post('http://localhost:5000/getExchange', id)
   .then(res => {
    const saveBooks = localStorage.setItem('exchangeBooks', JSON.stringify(res.data))
    dispatch(setExchangeBooks(saveBooks))

     dispatch({
       type: GET_EXCHANGE_BOOKS,
       payload: res.data
     })
     history.push('/exchange')
   })
   .catch(err => console.log(err))
}


export const getBook = (book_id, history) => dispatch => {
  axios.get(`http://localhost:5000/getBookDetails/${book_id}`)
   .then(res => {
     const saveBook = localStorage.setItem('book', JSON.stringify(res.data));
     dispatch(setCurrentBook(saveBook))

     dispatch({
       type: SET_CURRENT_BOOK,
       payload: res.data
     })
    //  history.push('/details')
   })
   .catch(err => console.log(err))
}




export const getBuyBook = (key, history) => dispatch => {
  axios.get(`http://localhost:5000/getBookDetails/${key}`)
    .then(res => {
      const saveBook = localStorage.setItem('book', JSON.stringify(res.data));
      dispatch(setCurrentBook(saveBook))

      dispatch({
        type: SET_CURRENT_BOOK,
        payload: res.data
      })
      history.push('/buy')
    })
    .catch(err => console.log(err))
}

export const getRentBook = (key, history) => dispatch => {
  axios.get(`http://localhost:5000/getBookDetails/${key}`)
    .then(res => {
      const saveBook = localStorage.setItem('book', JSON.stringify(res.data));
      dispatch(setCurrentBook(saveBook))

      dispatch({
        type: SET_CURRENT_BOOK,
        payload: res.data
      })
      history.push('/rent')
    })
    .catch(err => console.log(err))
}

export const getReviewsBook = (book_id, history) => dispatch => {
  axios.post('http://localhost:5000/getReviews', book_id)
   .then(res => {
     const saveReviews = localStorage.setItem('reviews', JSON.stringify(res.data));
     dispatch(setReviewsBook(saveReviews))

     dispatch({
       type: GET_REVIEWS_BOOK,
       payload: res.data
     })
     history.push('/review')
   })
   .catch(err => console.log(err))
}

export const getReviewsDetails = (id, history) => dispatch => {
  axios.post('http://localhost:5000/getReviews', id)
    .then(res => {
      const saveReviews = localStorage.setItem('reviews', JSON.stringify(res.data));
      dispatch(setReviewsBook(saveReviews))

      dispatch({
        type: GET_REVIEWS_BOOK,
        payload: res.data
      })
      history.push('/details')
    })
    .catch(err => console.log(err))
}


export const setReviewsBook = (reviews) => {
  return {
    type: GET_REVIEWS_BOOK,
    payload: reviews
  }
}

export const setCurrentBook = (book) => {
  return {
    type: SET_CURRENT_BOOK,
    payload: book
  }
}

export const setExchangeBooks = (books) => {
  return {
    type: GET_EXCHANGE_BOOKS,
    payload: books
  }
}