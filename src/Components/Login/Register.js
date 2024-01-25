import { React, useState } from "react";
import { Link, useNavigate} from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TextField from '@mui/material/TextField';
import axios from "axios";
import '../../css/Login/Register.css'

export default function Register() {
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errPwd, setErrPwd] = useState(true);
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (errPwd === true && username !== '' && id !== '' && password !== '') {

      try {
        const response = await axios.post('http://localhost:4000/signup', {
          username,
          id,
          password
        });

        if (response.data) {
          console.log(response.data);
          navigate('/');
        } else {
          console.error('Response data is undefined');
        }
      } catch (error) {
        console.error('Error during signup:', error);
      }
    }
  };

  const handlePasswordCheck = (value) => {
    if (value === password)
      setErrPwd(true);
    else
      setErrPwd(false);
  }
  return (
    <div className="homeMain">
      <div className="homeImage">
        <img src="https://picsum.photos/1200/1200" alt="" />
      </div>
      <div className="homeBody">
        <div className="homeLogin">
          <AcUnitIcon sx={{ color: '#3fa5f0' }} fontSize="large" />
          <h1 className='logo_text'>VANTAGE</h1>
          <p className="register">
            계정이 있으십니까?
            <Link to="/">로그인</Link>
          </p>
          <div className="loginForm">
            <TextField onChange={e => setUsername(e.target.value)} id="lastName" label="이름" variant="outlined" />
            <TextField onChange={e => setId(e.target.value)} id="id" label="아이디" variant="outlined" />
            <TextField onChange={e => setPassword(e.target.value)} id="password" label="비밀번호" type="password" />
            {(password === '' || errPwd === true) ? 
            <TextField onChange={e => handlePasswordCheck(e.target.value)} id="password" label="비밀번호 확인" type="password" /> :
            <TextField error onChange={e => handlePasswordCheck(e.target.value)} id="outlined-error" label="비밀번호 확인" type="password"  helperText="일치하지 않음" />}
            <button className="loginButton" onClick={handleSignup}>회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
}
