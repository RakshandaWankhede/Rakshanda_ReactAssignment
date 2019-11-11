import React from 'react';
import './login.css';
import axios from 'axios';
import Toast from '../toast/toast';
import ReactDOM from 'react-dom';


class Login extends React.Component{ 
    constructor(){
        super();
        this.url ='https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login';
        this.Authorization ="Bearer YWRtaW46YWRtaW4=";
        this.contentType = 'application/json';
    }
    state={
     Name:"",
     Password:''
    }
    changeHandler=(event)=>{
        const value = event.target.value;
        this.setState({...this.State,[event.target.name]:value});
        this.renderToast("","invisible");
      }
    inputValidation=()=>{
        if(/^\S*$/.test(this.state.Name) && /^\S*$/.test(this.state.Password)){
           this.clickHandler();
        }
        else{
            this.renderToast("Invalid Input","visible");
        }
    }
    clickHandler = ()=>{
        let self = this;
        axios({
        method: 'post',
        url: this.url,
        data: {
            "username":this.state.Name,//"trupti.kashid@objectedge.com",
            "password":this.state.Password//"Objectedge$10", 
        },
        config: { headers: {
                "Authorization":this.Authorization,
                'Content-Type': this.contentType
                }
        }
        })
        .then(function (response) {
            if(response.status === 200){
                self.renderToast("success","visible");
            }
        })
        .catch(function (response) {
            self.renderToast("failed","visible");
        })
    }
    renderToast=(toastValue,visibleToast)=>{
        ReactDOM.render(<Toast  message={toastValue}
            visible= {visibleToast}/>, document.getElementById('toastMsg'));
    }
    closeHandler=()=>{
        this.renderToast("","invisible");
    }
    render(){
        return (
            <div>
                <div className='container'>
                    <h3 className="alignLeft">LOG IN</h3>
                    <div className="labelWrapper alignLeft"><label>Name :</label></div>
                    <input  
                        type="text"
                        name="Name"
                        className="inputField"
                        onChange={this.changeHandler}
                    required></input>
                    <br></br>
                    <div className="labelWrapper alignLeft"><label>Password :</label></div>
                    <input
                        type="password"
                        name="Password"
                        className="inputField"
                        onChange={this.changeHandler}
                    required></input>
                    <br></br>
                    <div className="alignLeft"><button onClick ={this.inputValidation}>Submit</button></div>
                    <div id="Result"></div>
                </div>
                <div id="toastMsg" onClick={this.closeHandler}></div>
            </div>
        );
    }
}
export default Login;