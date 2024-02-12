import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import '../css/Home.css';

export default function Home() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();
  // const [errMessage, setErrMessage] = useState('');

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:4000/login', {id,password});
  //     console.log(response.data);
  //     if(response.data.success === true)
  //       navigate('/kr');

  //   } catch(error) {
  //     console.error('Login failed', error.response.data.message);
  //     setErrMessage(error.response.data.message);
  //   }
  // }

  
  return (
    <div className="homeMain">
      <div className="homeImage">
        <img src="https://picsum.photos/1200/1200" alt="" />
      </div>
      <div className="homeBody">
        <div className="homeLogin">
          <AcUnitIcon sx={{ color: '#3fa5f0' }} fontSize='large' />
          <h1 className='logo_text'>VANTAGE</h1>
          <p className="register">
            새로 오셨습니까?
            <Link to="/register">회원가입</Link>
          </p>
          <div className="loginForm">
            <TextField onChange={e => setId(e.target.value)} id="id" label="아이디" variant="outlined" />
            <TextField onChange={e => setPassword(e.target.value)} id="password" label="비밀번호" type="password" />
            <div className="remember">
              <div>
                <Checkbox id='checkbox' disable />
                <span>로그인 상태 유지</span>
              </div>
              {/*<button className="forgetPassword">비밀번호 찾기</button>*/}
            </div>
            {/*<p className="errMsg">{errMessage}</p>*/}
            <button className="loginButton" >로그인</button>
          </div>
        </div>
      </div>
    </div>
  );
}
