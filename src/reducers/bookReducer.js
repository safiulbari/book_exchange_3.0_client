import { SET_CURRENT_BOOK } from '../actions/types';

const initialState = {
  book: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_BOOK:
      return { 
        ...state, 
        book: action.payload
      };
    default:
      return state;
  }
}