import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Login/Home';
import Register from './pages/Login/Register';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';

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
