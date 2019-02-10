import {combineReducers} from 'redux';
import userReducer from './userReducer';
import bookReducer from './bookReducer';
import exchangeReducer from './exchangeReducer';
import bookReviewReducer from './bookReviewReducer';

export default combineReducers({
  users: userReducer,
  books: bookReducer,
  exchange: exchangeReducer,
  bookReviews: bookReviewReducer
})