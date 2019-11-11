import React, {Component} from 'react';
import './App.css';
import LoginPage from './container/LoginPage/LoginPage';
import Homepage from './container/HomePage/HomePage'

class App extends Component  {
  constructor(){
    super();
  }
  render(){
    return (
      <div className="App">
        <LoginPage></LoginPage>
        <Homepage></Homepage>
      </div>
    );
  }
}

export default App;
