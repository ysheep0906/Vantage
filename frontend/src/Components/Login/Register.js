import { React, useState } from "react";
import { Link, useNavigate} from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from "axios";
import '../../css/Login/Register.css'

export default function Register() {
  const [username, setUsername] = useState('');
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [errPwd, setErrPwd] = useState(true);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const checkEmail = () => {
    if(email === '') return true;
    let check = /^[A-Za-z0-9_]+[A-Za-z0-9][@]{1}[A-Za-z0-9]+[A-Za-z0-9][.]{1}[A-Za-z]{1,3}$/;
    return check.test(email);
  }

  const handlePasswordCheck = () => {
    if(errPwd === password || password === '')
      return true;
    else
      return false;
  }


  const IdDoubleCheck = () => {
    //중복 확인 함수
  }

  const SignupCheck = async () => {
    
    //회원가입 버튼 누르기 전에 빈 칸 없는지 확인, 중복확인
    // if (errPwd === true && username !== '' && userid !== '' && password !== '') {
     
      // try {
      //   const response = await axios.post('http://192.168.219.103:8080/user/signup', {
      //     'name': username,
      //     'username': userid,
      //     'password': password
      //   });
      //   console.log('Hello');
      //   if (response.data) {
      //     console.log(response.data);
      //     //navigate('/');
      //   } else {
      //     console.error('Response data is undefined');
      //   }
      // } catch (error) {
      //   console.error('Error during signup:', error);
      // }
//  }
  };

  return (
    <div className="homeMain" style={{height:'fit-content'}}>
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
            <div className="loginFormTitle"><p>기본 정보</p></div>
            <TextField onChange={e => setUsername(e.target.value)} id="lastName" label="이름"/>
            <div className="loginFormId">
              <div className="idForm"><TextField onChange={e => setUserid(e.target.value)} id="userid" label="아이디" fullWidth/></div>
              <button onClick={IdDoubleCheck}>중복 확인</button>
            </div>
            <TextField onChange={e => setPassword(e.target.value)} id="password" label="비밀번호" type="password" />

            <TextField onChange={e => setErrPwd(e.target.value)} id="password" label="비밀번호 확인" type="password" error={!handlePasswordCheck()} helperText={handlePasswordCheck() ? "" : "일치하지 않음"} />
            
            <br/>
            <div className="loginFormTitle"><p>닉네임</p></div>
            <TextField onChange={e => setNickname(e.target.value)} id="nickname" label="닉네임" />

            <div className="loginFormTitle"><p>이메일</p></div>
            <TextField onChange={e => setEmail(e.target.value)}id="email" label="이메일" error={!checkEmail()} helperText={checkEmail() ? "":"유효하지 않음"}/>

            <div className="loginFormTitle"><p>세부 정보</p></div>
            <div className="jobAndAddress">
            <FormControl fullWidth>
              <InputLabel id="job">직업</InputLabel>
              <Select value={job} label="직업" onChange={e => setJob(e.target.value)}>
                <MenuItem value={0}>무직</MenuItem>
                <MenuItem value={1}>학생</MenuItem>
                <MenuItem value={2}>직장인</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="job">거주지</InputLabel>
              <Select value={address} label="거주지" onChange={e => setAddress(e.target.value)}>
                <MenuItem value={0}>서울특별시</MenuItem>
                <MenuItem value={1}>경기도</MenuItem>
                <MenuItem value={2}>강원도</MenuItem>
                <MenuItem value={3}>충청북도</MenuItem>
                <MenuItem value={4}>충청남도</MenuItem>
                <MenuItem value={5}>전라북도</MenuItem>
                <MenuItem value={6}>전라남도</MenuItem>
                <MenuItem value={7}>경상북도</MenuItem>
                <MenuItem value={8}>경상남도</MenuItem>
                <MenuItem value={9}>제주도</MenuItem>
              </Select>
            </FormControl>
            </div>
            <button className="loginButton" onClick={SignupCheck}>회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
}
