import React, {Component} from 'react';
import './LoginPage.css';
import Login from '../../components/login/login';

class LoginPage extends Component  {
  constructor(){
    super();
  }
  render(){
    return (
      <div className="LoginPage">
        <Login>
        </Login>
        <div className="bannerImg"></div>
      </div>
    );
  }
}

export default LoginPage;