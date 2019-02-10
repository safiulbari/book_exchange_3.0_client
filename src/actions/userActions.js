import {USER_DISPATCH, SET_CURRENT_USER} from './types';
import axios from 'axios';


// Register
export const registerUser = (userData, history) => dispatch => {
  axios.post('http://localhost:5000/register', userData)
    .then(res => {
      if (res.data.name !== '' && res.data.email !== '' && res.data.password !== '') {
        
        dispatch({
          type: USER_DISPATCH,
          payload: res.data
        })
        history.push('/login')
      } else {
        alert('Please Fill Out Register form properly!')
      }
    })
    .catch(err => console.log(err))
}  


// login
export const loginUser = (userData, history) => dispatch => {

  axios.post('http://localhost:5000/login', userData)

    .then(res => {

      const saveUser = localStorage.setItem('user', JSON.stringify(res.data));
      dispatch(setCurrentUser(saveUser));

      if (res.data.email === userData.email && res.data.password === userData.password) {
        
        dispatch ({
          type: SET_CURRENT_USER,
          payload: res.data
        })
        history.push('/dashboard')
      } else {
        alert('Incorrect Email and Password')
      }
    })
    .catch(err => console.log(err))
}

// update
export const updateUser = (userData, history) => dispatch => {

  axios.put('http://localhost:5000/update', userData)

    .then(res => {

      const saveUser = localStorage.setItem('user', JSON.stringify(res.data));
      dispatch(setCurrentUser(saveUser));

        dispatch({
          type: SET_CURRENT_USER,
          payload: res.data
        })
        history.push('/dashboard')
      
    })
    .catch(err => console.log(err))
}

// Set current user
export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
}


// Log out user
export const logoutUser = () => dispatch => {
  localStorage.removeItem('user');
  localStorage.removeItem('book');
  localStorage.removeItem('reviews');
  localStorage.removeItem('exchangeBooks');

  dispatch(setCurrentUser({}));
}