import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Main from './Components/Main';
import Register from './Components/Login/Register';
import NotFound from './Components/NotFound';

export default function App() {
  return (
    <div className="wrap_root">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/kr/*' element={<Main />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}
