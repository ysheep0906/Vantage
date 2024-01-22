import React from "react";
import { Link , Routes, Route } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import '../css/Home.css';

// const name = <div>
//   <TextField id="lastName" label="성" variant="outlined" />
//   <TextField id="firstName" label="이름" variant="outlined" />
// </div>

export default function Home() {
  return (
    <div className="homeMain">
      <div className="homeImage">
        <img src="https://picsum.photos/768/700" alt="" />
      </div>
      <div className="homeBody">
        <div className="homeLogin">
          <AcUnitIcon sx={{ color: '#3fa5f0' }} fontSize="large"/>
          <h1 className='logo_text'>Vantage</h1>
          <p className="register">
            새로 오셨습니까?
            <Link to="register">회원가입</Link>
          </p>
          <div className="loginForm">
            {/* <Routes>
              <Route path="register" element={name}></Route>
            </Routes> */}
            <TextField id="email" label="Email" variant="outlined" />
            <TextField id="password" label="Password" type="password" />
            <div className="remember">
              <div>
                <Checkbox id='checkbox' disable />
                <span>로그인 상태 유지</span>
              </div>
              <button className="forgetPassword">비밀번호 찾기</button>

            </div>
            <button className="loginButton">로그인</button>
          </div>
        </div>
      </div>
    </div>
  );
}

//<Link to='kr'><button className="start">시작하기</button></Link>