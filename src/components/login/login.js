import React from 'react';
import './login.scss';
// eslint-disable-next-line import/imports-first
import axios from 'axios';
import Toast from '../toast/toast';

class Login extends React.Component{ 
    constructor(){
        super();
        this.url ='https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login';
        this.Authorization ="Bearer YWRtaW46YWRtaW4=";
        this.contentType = 'application/json';
        this.state={
            toastStatus :false,
            toastMsg : ""
           };
    }

    toastMessageHandler=(message)=>{
        this.setState({toastStatus:false});
        this.setState({toastStatus:true,toastMsg:message});
      }

    inputValidation=()=>{
        if(/^\S*$/.test(this.name.value) && /^\S*$/.test(this.password.value)){
           this.clickHandler();
        }
        else{
            setTimeout(()=>{this.toastMessageHandler("invalid Input");},300);
        }
    }

    clickHandler = ()=>{
        axios({
        method: 'post',
        url: this.url,
        data: {
            "username":this.name.value,// "trupti.kashid@objectedge.com",
            "password":this.password.value// "Objectedge$10", 
        },
        config: { headers: {
                "Authorization":this.Authorization,
                'Content-Type': this.contentType
                }
        }
        })
        .then(response => {
            if(response.status === 200){
            this.toastMessageHandler("Success");
            }
        })
        .catch(()=> {
            this.toastMessageHandler("Failed");
        });
    }

    render(){
        const { toastStatus } = this.state;
        const { toastMsg } = this.state;
        return (
            <div>
                <div className='container'>
                    <h3 className="alignLeft">LOG IN</h3>
                    <div className="labelWrapper alignLeft">
                        <span >Name :</span>
                    </div>
                    <input 
                        type="text"
                        ref={ref => {this.name = ref;}}
                        className="inputField"
                    required />
                    <div className="labelWrapper alignLeft"><span>Password :</span></div>
                    <input
                        type="password"
                        ref={ref => {this.password = ref;}}
                        className="inputField"
                    required />     
                    <div className="alignLeft"><button onClick ={this.inputValidation}>Submit</button></div>
                    <div id="Result" />
                </div>
                {toastStatus ? <Toast message={toastMsg}/>:null}
            </div>
        );
    }
}
export default Login;