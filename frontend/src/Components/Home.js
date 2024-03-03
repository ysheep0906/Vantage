import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import '../css/Home.css';

export default function Home() {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState('');
  const location = useLocation();

  const LoginCheck = async () => {
    console.log('id', 'password')
    try {
      const response = await axios.post('http://localhost:8080/user/signin', {
        "loginId": userid,
        "password": password
      });
      console.log(response.data);
      // navigate('/kr');

    } catch (error) {
      console.error('Login failed', error);
      setErrMessage(error);
    }
  }

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const isSignup = params.get('signup');

    if (isSignup === 'true') {
      handleClick();
    }
  }, []);

  return (
    <div className="homeMain" style={{ height: '100vh' }}>
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
            <TextField onChange={e => setUserid(e.target.value)} id="userid" label="아이디" />
            <TextField onChange={e => setPassword(e.target.value)} id="password" label="비밀번호" type="password" />
            <div className="remember">
              <div>
                <Checkbox id='checkbox' disable />
                <span>로그인 상태 유지</span>
              </div>
              {/*<button className="forgetPassword">비밀번호 찾기</button>*/}
            </div>
            {/*<p className="errMsg">{errMessage}</p>*/}

            <button className="loginButton" onClick={LoginCheck}>로그인</button>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          회원가입을 완료하였습니다!
        </Alert>
      </Snackbar>
    </div>
  );
}
