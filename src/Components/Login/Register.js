import React from "react";
import { Link } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TextField from '@mui/material/TextField';
import '../../css/Login/Register.css'

export default function Register() {
  return (
    <div className="homeMain">
        <div className="homeImage">
          <img src="https://picsum.photos/768/700" alt="" />
        </div>
        <div className="homeBody">
          <div className="homeLogin">
            <AcUnitIcon sx={{ color: '#3fa5f0' }} fontSize="large" />
            <h1 className='logo_text'>Vantage</h1>
            <p className="register">
              계정이 있으십니까?
              <Link to="/">로그인</Link>
            </p>
            <div className="loginForm">
              <div className="name">
                <TextField id="lastName" label="성" variant="outlined" sx={{width: '48%'}}/>
                <TextField id="firstName" label="이름" variant="outlined" sx={{width: '48%'}} />
              </div>
              <TextField id="email" label="Email" variant="outlined" />
              <TextField id="password" label="Password" type="password" />
              <button className="loginButton">회원가입</button>
            </div>
          </div>
        </div>
      </div>
  );
}
