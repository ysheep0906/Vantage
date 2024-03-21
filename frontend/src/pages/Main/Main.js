import {React, useEffect} from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import MenuContent from '../../layouts/Menu/MenuContent';
import Profile from '../../Components/Profile/Profile';
import QuizMain from '../Quiz/QuizMain';
import Header from '../../layouts/Header/Header';
import '../../css/Main.css';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { bearerAtom, nicknameAtom, emailAtom, jobAtom, addressAtom, birthDateAtom  } from "../../recoil/atoms";
import axios from "axios";

export default function Main() {
  const navigate = useNavigate();
  const bearer = useRecoilValue(bearerAtom);
  const setNickname = useSetRecoilState(nicknameAtom);
  const setEmail = useSetRecoilState(emailAtom);
  const setJob = useSetRecoilState(jobAtom);
  const setAddress = useSetRecoilState(addressAtom);
  const setBirthDate = useSetRecoilState(birthDateAtom);

  useEffect(()=> { // 처음 프로필 정보를 전부 store 안에 저장
    if (bearer === '') {
      navigate('/');
    }
    axios.get('http://localhost:8080/user/info', {
        headers: { Authorization: `Bearer ${bearer}`}})
      .then(response => {
        setNickname(response.data.data.nickname);
        setEmail(response.data.data.email);
        setJob(response.data.data.job);
        setAddress(response.data.data.address);

        const date = response.data.data.birthDate;
        setBirthDate(date.substr(0,4) + '년 ' + date.substr(4,2) + '월 ' + date.substr(6,2) + '일');})
    .catch((error) => {
        console.log('error ' + error);
     });     
  }, [bearer, navigate, setAddress, setBirthDate, setEmail, setJob, setNickname])

  return (
    <div className='wrap'>
      <MenuContent />
      <div className='wrap_content_root'>
        <Header />
        <div className='wrap_content'>
          <Routes>
            <Route path='management/:id' element={<Profile />}></Route> {/* *표시 고*/}
            <Route path='toeic/:id' element={<QuizMain topic={'toeic'}/>}></Route>
            <Route path='sat/:id' element={<QuizMain topic={'sat'} />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}