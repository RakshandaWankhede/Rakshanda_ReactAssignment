import React from 'react';
import './LoginPage.scss';
import Login from '../../components/login/login';

  const loginPage=() =>{
    return (
      <div className="LoginPage">
        <Login/>
        <div className="bannerImg" />
      </div>
    );
  };


export default loginPage;