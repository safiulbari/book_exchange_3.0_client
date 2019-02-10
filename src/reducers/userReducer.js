import {USER_DISPATCH} from '../actions/types';
import {SET_CURRENT_USER} from '../actions/types';

const initialState = {
  user: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case USER_DISPATCH : 
      return {
        ...state,
        user: action.payload
      }
    case SET_CURRENT_USER :
      return {
        ...state,
        user: action.payload
      }
    default :
      return state;
  }
}