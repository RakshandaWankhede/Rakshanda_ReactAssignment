import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.scss';
import LoginPage from './container/LoginPage/LoginPage';
import Homepage from './container/HomePage/HomePage';
import ProductListingPage from './container/ProductListingPage/ProductListingPage';
import ProductSearchPage from './container/ProductSearchPage/ProductSearchPage';

const App = () => {
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

export default App;
