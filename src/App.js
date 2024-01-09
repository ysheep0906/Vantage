import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MenuContent from './Components/MenuContent';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Main from './Components/Main';
import NotFound from './Components/NotFound';
import './App.css';
import Header from './Components/Header';

export default function App() {
  return (
    <div className='wrap'>
      <MenuContent />
      <div className='wrap_content_root'>
        <Header />
        <div className='wrap_content'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/management/:id/*' element={<Profile />}></Route>
            <Route path='/toeic/:id/*' element={<Main />}></Route>
            <Route path='/sat/:id/*' element={<Main />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
