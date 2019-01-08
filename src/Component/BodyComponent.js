import React, { Component } from 'react'
import LoginForm from '../Forms/LoginForm';
import SignUpForm from '../Forms/SignUpForm';

export default class BodyComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      login : {
        email: '',
        password:''
      },
      signup : {
        fname:'',
        lname:'',
        email:'',
        password:''
      }
    };
  }

  onClickEvent(e,data,form){
    e.preventDefault();
    console.log(data);
  };

  onChange = (event, form) => {
  
    const form1 = this.state[form];
    form1[event.target.id] = event.target.value
    this.setState({
      [form] : form1    
    });
  }

  render() {
    return (
      <div className="row">
          <div className="col">
          <LoginForm loginData={this.state.login} onClickEv={this.onClickEvent} 
           handleChange={this.onChange}/>
          </div>
          <div className="col">
          <SignUpForm signupData={this.state.signup} onClickEv={this.onClickEvent} 
           handleChange={this.onChange}/>
          </div>
        </div>
    )
  }
}
