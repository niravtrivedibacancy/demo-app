import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel ,Label} from "react-bootstrap";
import "./signup.css";

export default class SignUpForm extends React.Component { 

  render(){
    return (
      <div className="Signup">
      <Label className="label">Sign Up</Label>
     <form >
       <FormGroup controlId="fname" bsSize="large">
         <ControlLabel>First Name</ControlLabel>
         <FormControl
           autoFocus
           type="text"
           value={this.props.fname}
              onChange={(e) => this.props.handleChange(e,"signup")}
         />
       </FormGroup>
       <FormGroup controlId="lname" bsSize="large">
         <ControlLabel>Last Name</ControlLabel>
         <FormControl
           autoFocus
           type="text"
           value={this.props.lanme}
           onChange={(e) => this.props.handleChange(e,"signup")}
         />
       </FormGroup>
       <FormGroup controlId="email" bsSize="large">
         <ControlLabel>Email</ControlLabel>
         <FormControl
           autoFocus
           type="email"
           value={this.props.email}
           onChange={(e) => this.props.handleChange(e,"signup")}
         />
       </FormGroup>
       <FormGroup controlId="password" bsSize="large">
         <ControlLabel>Password</ControlLabel>
         <FormControl
          value={this.props.password}
          onChange={(e) => this.props.handleChange(e,"signup")}
           type="password"
         />
       </FormGroup>
       <Button
         block
         bsSize="large"
         // disabled={!this.validateForm()}
         type="button"
         bsStyle="primary"
         onClick={(e) => {this.props.onClickEv(e,this.props,"signup")}}
       >
         Sign Up
     </Button>
     </form>
  </div>
    )
  }

}

// const  SignUpForm = ({handleChange,onClickEv,signupData})  => {
//   return (
//     <div className="Signup">
//     <Label className="label">Sign Up</Label>
//    <form >
//      <FormGroup controlId="fname" bsSize="large">
//        <ControlLabel>First Name</ControlLabel>
//        <FormControl
//          autoFocus
//          type="text"
//          value={signupData.fname}
//             onChange={(e) => handleChange(e,"signup")}
//        />
//      </FormGroup>
//      <FormGroup controlId="lname" bsSize="large">
//        <ControlLabel>Last Name</ControlLabel>
//        <FormControl
//          autoFocus
//          type="text"
//          value={signupData.lanme}
//          onChange={(e) => handleChange(e,"signup")}
//        />
//      </FormGroup>
//      <FormGroup controlId="email" bsSize="large">
//        <ControlLabel>Email</ControlLabel>
//        <FormControl
//          autoFocus
//          type="email"
//          value={signupData.email}
//          onChange={(e) => handleChange(e,"signup")}
//        />
//      </FormGroup>
//      <FormGroup controlId="password" bsSize="large">
//        <ControlLabel>Password</ControlLabel>
//        <FormControl
//         value={signupData.password}
//         onChange={(e) => handleChange(e,"signup")}
//          type="password"
//        />
//      </FormGroup>
//      <Button
//        block
//        bsSize="large"
//        // disabled={!this.validateForm()}
//        type="button"
//        bsStyle="primary"
//        onClick={() => {onClickEv(signupData,"signup")}}
//      >
//        Login
//    </Button>
//    </form>
// </div>
//   )
// };

// export default SignUpForm;
