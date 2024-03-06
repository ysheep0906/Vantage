import { React, useState } from "react";
import { Link, useNavigate} from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { TextField, FormControl, InputLabel, Select, MenuItem, CircularProgress, Alert } from '@mui/material';
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

  const [progress, setProgress] = useState(false);
  const [flagId, setFlagId] = useState(false);
  const [idDoubleCheck, setIdDoubleCheck] = useState(true);
  const navigate = useNavigate();

  const checkPassword = () => {
    if(password === '') return true;
    let check = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
    return check.test(password);
  }

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

  const setBtnSignup = () => {
    if(flagId === true) {
      setProgress(true);
      setIdDoubleCheck(true);
      SignupCheck(); 
    } else {
      setIdDoubleCheck(false);
    }
  }

  const IdDoubleCheck = async () => {
    //중복 확인 함수
    setFlagId(true); // 중복 확인이 true가 되었을 때 flag를 true로 바꿔야 함
    // if (userid === '') {
    //   console.log('아이디를 입력해주세요!')
    // } else {
    //   try {
    //     const response =  await axios.post('http://localhost:8080/user/idcheck', { 'loginid': userid });
    //     if (response.data) {
    //       console.log(response.data);
    //     } else {
    //        console.error('Response data is undefined');
    //     }
    //   } catch(error) {
    //     console.log(error);
    //   }
    // }
  }

  const SignupCheck = async () => {
    
    //회원가입 버튼 누르기 전에 빈 칸 없는지 확인, 중복확인
    if (handlePasswordCheck() !== false && checkPassword() !== false && checkEmail() !== false && //비밀번호와 이메일이 비워지면 flag값이 true가 되지만 밑 조건으로 조건에 걸리게 됨
     username !== '' && userid !== '' && password !== '' && nickname !== '' && email !== '' && job !== '' && address !== '') { //비밀번호와 이메일은 형식에 맞지 않으면 회원가입 불가
      try {
        const response = await axios.post('http://localhost:8080/user/signup', {
          "name": username,
          "loginId": userid,
          "password": password,
          "birthDate": '2024-02-27',
          "job": job,
          "nickname": nickname,
          "address": address,
          "email": email
        });
        if (response.data) {
          
          console.log(response.data);
          navigate('/?signup=true');

        } else {
          console.error('Response data is undefined');
        }
      } catch (error) {
        console.error('Error during signup:', error);
      }
    }
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
            <TextField onChange={e => setPassword(e.target.value)} id="password" label="비밀번호" type="password" error={!checkPassword()} helperText="비밀번호 최소 8자에서 16자까지, 영문, 숫자 및 특수문자 포함"/>

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
            {idDoubleCheck === true ? "" : <Alert severity="error">아이디 중복확인이 필요합니다!</Alert>}
            <button className="loginButton" onClick={()=>{setBtnSignup();}}>{progress === true ? <CircularProgress size='1rem' color="inherit" /> : '회원가입'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
