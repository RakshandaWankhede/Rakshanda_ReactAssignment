import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.scss';
import LoginPage from './container/LoginPage/LoginPage';
import Homepage from './container/HomePage/HomePage';
import ProductListingPage from './container/ProductListingPage/ProductListingPage';
import ProductSearchPage from './container/ProductSearchPage/ProductSearchPage';
import { connect } from 'react-redux';

const App = props => {
  return (
    <Router>
      <div className="App">
        <div>
          <ul className="ulTag">
            <li className="liTag">
              <Link to="/"> Home </Link>
            </li>
            <li className="liTag">
              <Link to="/login"> Login </Link>
            </li>
            <li className="liTag">
              <Link to="/productList"> ProductListing </Link>
            </li>
            <li className="liTag">
              <Link to="/searchProduct"> SearchProduct </Link>
            </li>
            <li className="liTag nameTag">
              {props.name ? (
                <>
                  {props.name}
                  <button onClick={props.nameChange} className="logOutButton">
                    logOut
                  </button>
                </>
              ) : null}
            </li>
          </ul>
          <hr className="hrLine" />
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/productList" component={ProductListingPage} />
          <Route path="/searchProduct" component={ProductSearchPage} />
        </div>
      </div>
    </Router>
  );
};
const MapStateToProps = state => {
  return {
    name: state.name
  };
};
const MapDispatchToProps = dispatch => {
  return {
    nameChange: () => {
      dispatch({ type: 'CHANGE_NAME', payload: '' });
    }
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(App);
