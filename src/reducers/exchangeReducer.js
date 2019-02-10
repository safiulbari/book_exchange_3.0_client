import { GET_EXCHANGE_BOOKS } from '../actions/types';

const initialState = {
  exchangeBooks: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
    case GET_EXCHANGE_BOOKS:
      return {
        ...state,
        exchangeBooks: action.payload
      }
  }
}