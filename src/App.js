import React from 'react';
import {BrowserRouter as Router, Link,Route } from 'react-router-dom';
import './App.scss';
import LoginPage from './container/LoginPage/LoginPage';
import Homepage from './container/HomePage/HomePage';

  const App =()=>{
    return (
      <Router>
        <div className = "App">
          <div>
            <ul className = "ulTag">
              <li className = "liTag"><Link to = '/' > Home </Link></li>
              <li className = "liTag"><Link to = '/login' > Login </Link></li>
            </ul>
            <hr className = "hrLine"/>
            <Route exact path = '/' component = {Homepage} />
            <Route path = '/login' component = {LoginPage} />
          </div>
        </div>
        </Router>
    );
  };


export default App;
