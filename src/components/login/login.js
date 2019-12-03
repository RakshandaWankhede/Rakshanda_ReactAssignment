/* eslint-disable import/imports-first */
/* eslint-disable import/order */
import React from 'react';
import './login.scss';
import axios from 'axios';
import Toast from '../toast/toast';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.url =
      'https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login';
    this.Authorization = 'Bearer YWRtaW46YWRtaW4=';
    this.contentType = 'application/json';
    this.state = {
      toastStatus: false,
      toastMsg: ''
    };
  }

  toastMessageHandler = message => {
    this.setState({ toastStatus: false });
    this.setState({ toastStatus: true, toastMsg: message });
  };

  inputValidation = () => {
    if (/^\S*$/.test(this.name.value) && /^\S*$/.test(this.password.value)) {
      this.clickHandler();
    } else {
      setTimeout(() => {
        this.toastMessageHandler('invalid Input');
      }, 300);
    }
  };

  clickHandler = () => {
    axios({
      method: 'post',
      url: this.url,
      data: {
        username: this.name.value, // "trupti.kashid@objectedge.com",
        password: this.password.value // "Objectedge$10",
      },
      config: {
        headers: {
          Authorization: this.Authorization,
          'Content-Type': this.contentType
        }
      }
    })
      .then(response => {
        if (response.status === 200) {
          this.toastMessageHandler('Success');
          const access_token = response.data.access_token;
          const id = response.data.id;
          axios({
            method: 'get',
            url: `https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/profiles/current?profileId=${id}`,
            headers: {
              Authorization: `Bearer ${access_token}`
            }
          }).then(response => {
            const { changeName } = this.props;
            const fullName =
              response.data.profile_user.firstName +
              ' ' +
              response.data.profile_user.lastName;
            changeName(fullName);
          });
        }
      })
      .catch(() => {
        this.toastMessageHandler('Failed');
      });
  };

  render() {
    const { toastStatus } = this.state;
    const { toastMsg } = this.state;
    return (
      <div>
        <div className="container">
          <h3 className="alignLeft">LOG IN</h3>
          <div className="labelWrapper alignLeft">
            <span>Name :</span>
          </div>
          <input
            type="text"
            ref={ref => {
              this.name = ref;
            }}
            className="inputField"
            required
          />
          <div className="labelWrapper alignLeft">
            <span>Password :</span>
          </div>
          <input
            type="password"
            ref={ref => {
              this.password = ref;
            }}
            className="inputField"
            required
          />
          <div className="alignLeft">
            <button onClick={this.inputValidation}>Submit</button>
          </div>
          <div id="Result" />
        </div>
        {toastStatus ? <Toast message={toastMsg} /> : null}
      </div>
    );
  }
}
const MapDispatchToProps = dispatch => {
  return {
    changeName: token => {
      dispatch({ type: 'CHANGE_NAME', payload: token });
    }
  };
};
export default connect(null, MapDispatchToProps)(Login);
