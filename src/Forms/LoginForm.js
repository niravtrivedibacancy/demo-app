import React from 'react'
// import { Button, FormGroup, FormControl, ControlLabel, Label } from "react-bootstrap";
import InputForm from '../utility/InputForm';
import "./login.css";


const LoginForm = ({ handleChange, onClickEv, loginData }) => {

  return (
    // <div className="Login">
    //   <Label className="label">Login</Label>
    //   <form >
    //     <FormGroup controlId="email" bsSize="large">
    //       <ControlLabel>Email</ControlLabel>
    //       <FormControl
    //         autoFocus
    //         type="email"
    //         value={loginData.email}
    //         onChange={(e) => handleChange(e,"login")}
    //         />
    //     </FormGroup>
    //     <FormGroup controlId="password" bsSize="large">
    //       <ControlLabel>Password</ControlLabel>
    //       <FormControl
    //        value={loginData.password}
    //        onChange={(e) => handleChange(e,"login")}
    //         type="password"
    //       />
    //     </FormGroup>
    //     <Button
    //       block
    //       bsSize="large"
    //       type="button"
    //       bsStyle="primary"
    //       onClick={() => {onClickEv(loginData,"login")}}>
    //       Login
    //     </Button>
    //   </form>
    // </div>

    <div className="Login">
      <form>
        <InputForm type={"label"} className={"label"} value={"Login"} />
       
        <InputForm type={"label"} className={"label1"} value={"Email"} />

        <InputForm type={"text"} id={"email"} value={loginData.email} onChange={(e) => handleChange(e, "login")} />

        <InputForm type={"label"} value={"Password"} />

        <InputForm type={"password"} id={"password"} value={loginData.password} onChange={(e) => handleChange(e, "login")} />

        <InputForm type={"button"} value={"Login"} onClick={(e) => { onClickEv(e,loginData, "login") }} />
      </form>
    </div>
  )
};



export default LoginForm;
