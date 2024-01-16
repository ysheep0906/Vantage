import React from "react";
import { Routes, Route } from 'react-router-dom';
import MenuContent from './MenuContent';
import Profile from './Profile/Profile';
import QuizMain from './Quiz/QuizMain';
import Header from './Header';
import '../css/Main.css';

export default function Main() {
  return (
    <div className='wrap'>
      <MenuContent />
      <div className='wrap_content_root'>
        <Header />
        <div className='wrap_content'>
          <Routes>
            <Route path='management/:id' element={<Profile />}></Route> {/* *표시 고*/}
            <Route path='toeic/:id' element={<QuizMain />}></Route>
            <Route path='sat/:id' element={<QuizMain />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}