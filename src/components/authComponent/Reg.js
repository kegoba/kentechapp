import React, { Component } from "react";
import Axios from "axios";
import {BASE_URL} from "../asset/asset"


import { useNavigate } from "react-router-dom";

export const  withNavigation = (Component) => {
  return props => <Component {...props} navigate={useNavigate()} />;
}
class Reg extends Component {
  constructor() {
    super()
    this.state = {
      user : [],
      name: "",
      email: "",
      password: "",
      phone : "",
      error : false,
      registering : false,
      registered : true,
      msg : ""
    };
  }
  onchangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  }
  onchangeEmail =(e) => {
    this.setState({
      email: e.target.value,
    });
  }
  onchangePassword =(e) => {
    this.setState({
      password: e.target.value,
    });
  }
   onchangePhone =(e) => {
    this.setState({
      phone: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password, phone} = this.state
    if ((name.length >4) && (email.length> 4) && (password.length>4) && (phone.length>4)){
      const postdata = { name: name, email: email, password: password, phone: phone };
      this.setState({
        registering:true,
        registered :false
      })
      Axios.post(BASE_URL + "/register", postdata)
        .then((resp) => {
          if (resp.status === 200) {
            this.props.Login_action(resp.data);
            this.setState({ user: resp.data })
            this.setState({
              registering: false,
              registered: true
            })
            this.props.navigate("/login")
          }
        })
        .catch((err) => {
          this.setState({
            registering: false,
            registered: true,
            msg : "Please Enter Correct Information",
            error : true
          })
        })
    } else{
      this.setState({ 
        error: true,
        msg : "Unable To Complete Registration",
        registering: false,
        registered: true,
      }, () => {
        window.setTimeout(()=>{
          this.setState({
            error : false
          })
        },4000)
       })
    }   
  };
  handleReg = () => {
    this.props.navigate("/reg")
  }
  handleLogin = () => {
    this.props.navigate("/login")
  }
  render() {
    let {registered, registering, msg} = this.state
    return (
      <div>
        <div className="container reg-login">
          <div className="row">
            <div className="col">
              <button  className="btn ">
                <span onClick={this.handleReg} className="reg-sm  text-left">
                  Register
                </span>
                <span onClick={this.handleLogin} className="login-sm  text-right">
                  Login
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className=" container login-form text-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <input
                className="bg-gray-50 focus:ring-blue-500"
                  placeholder="Full Name"
                  type="text"
                  onChange={this.onchangeName}
                  value={this.state.name}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <input
                className="bg-gray-50 focus:ring-blue-500"
                  placeholder="E-mail"
                  type="text"
                  onChange={this.onchangeEmail}
                  value={this.state.email}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <input
                className="bg-gray-50 focus:ring-blue-500"
                  placeholder="Phone"
                  type="text"
                  onChange={this.onchangePhone}
                  value={this.state.phone}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <input
                className="bg-gray-50 focus:ring-blue-500"
                  placeholder="Password"
                  type="password"
                  onChange={this.onchangePassword}
                  value={this.state.password}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <button
                  type="submit"
                  className="btn "
                  onClick={this.handleSubmit}
                >
                {registering && <i className="fa fa-spinner"/> }
                {registered && <i> Register </i>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withNavigation(Reg);
