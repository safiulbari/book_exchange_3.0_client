import { GET_REVIEWS_BOOK} from '../actions/types';

const initialState = {
  reviews: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
    case GET_REVIEWS_BOOK:
      return {
        ...state,
        reviews: action.payload
      }
  }
}