import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { setCurrentUser } from './actions/userActions';
import { setCurrentBook, setReviewsBook, setExchangeBooks } from './actions/bookActions';

import './App.css';
import Navbar from './components/layouts/Navbar';
import Navbar2 from './components/layouts/Navbar2';
import Landing from './components/layouts/Landing';
import Footer from './components/layouts/Footer';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import EditProfile from './components/dashboard/EditProfile';
import AddCollection from './components/dashboard/AddCollection';
import AddWantToRead from './components/dashboard/AddWantToRead';
import Browse from './components/browse/Browse';
import BookDetails from './components/browse/BookDetails';
import Collection from './components/browse/Collection';
import WantToRead from './components/browse/WantToRead';
import Review from './components/Books/Review';
import Comments from './components/Books/Comments';
import Exchange from './components/Books/Exchange';
import ExchangeAlert from './components/Books/ExchangeAlert';
import RentAlert from './components/Books/RentAlert';
import Rent from './components/Books/Rent';
import Buy from './components/Books/Buy';
import BuyAlert from './components/Books/BuyAlert';

// check for logged in user
if (localStorage.user) {
  const storeUser = JSON.parse(localStorage.user)
  store.dispatch(setCurrentUser(storeUser))

} 

// check for book in local storage
if (localStorage.book) {
  const storeBook = JSON.parse(localStorage.book)
  store.dispatch(setCurrentBook(storeBook))
}

// check for reviews in local storage
if (localStorage.reviews) {
  const storeReviews = JSON.parse(localStorage.reviews)
  store.dispatch(setReviewsBook(storeReviews))
}

// check for exchange books in local storage
if (localStorage.exchangeBooks) {
  const storeBooks = JSON.parse(localStorage.exchangeBooks);
  store.dispatch(setExchangeBooks(storeBooks))
}

class App extends Component {
  
  
  render() {
    return (
      <Provider store = {store}>
        <Router>
          <div className="App">

            <Route exact path="/" component={Navbar2} />
            <Route exact path="/login" component={Navbar2} />
            <Route exact path="/register" component={Navbar2} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Navbar} />
            <Route exact path="/collection" component={Navbar} />
            <Route exact path="/wantToRead" component={Navbar} />
            <Route exact path="/details" component={Navbar} />
            <Route exact path="/edit-profile" component={Navbar} />
            <Route exact path="/add-collection" component={Navbar} />
            <Route exact path="/add-want-to-read" component={Navbar} />
            <Route exact path="/browse" component={Navbar} />
            <Route exact path="/review" component={Navbar} />
            <Route exact path="/comments" component={Navbar} />
            <Route exact path="/exchange" component={Navbar} />
            <Route exact path="/exchangeAlert" component={Navbar} />
            <Route exact path="/rentAlert" component={Navbar} />
            <Route exact path="/rent" component={Navbar} />
            <Route exact path="/buy" component={Navbar} />
            <Route exact path="/buyAlert" component={Navbar} />

            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />

              <Route exact path="/dashboard" component={Dashboard} />

              <Route exact path="/edit-profile" component={EditProfile} />
              <Route exact path="/add-collection" component={AddCollection} />
              <Route exact path="/add-want-to-read" component={AddWantToRead} />
              <Route exact path="/browse" component={Browse} />
              <Route exact path="/details" component={BookDetails} />
              <Route exact path="/collection" component={Collection} />
              <Route exact path="/wantToRead" component={WantToRead} />
              <Route exact path="/review" component={Review} />
              <Route exact path="/comments" component={Comments} />
              <Route exact path="/exchange" component={Exchange} />
              <Route exact path="/exchangeAlert" component={ExchangeAlert} />
              <Route exact path="/rent" component={Rent} />
              <Route exact path="/rentAlert" component={RentAlert} />
              <Route exact path="/buy" component={Buy} />
              <Route exact path="/buyAlert" component={BuyAlert} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
