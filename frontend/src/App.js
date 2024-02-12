import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './Components/Home';
import Register from './Components/Login/Register';
import Main from './Components/Main';
import NotFound from './Components/NotFound';

export default function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:4000/profile');

  //       if(response.data.loggedIn) {
  //         setLoggedIn(true);
  //         setUser(response.data.user);
  //       } else {
  //         setLoggedIn(false);
  //         setUser(null);
  //       }
  //     } catch(error) {
  //       console.error('Error checking login status:', error);
  //     }
  //   };

  //   checkLoginStatus();

  //   if(loggedIn) 
  //     navigate('/kr');
  //   else 
  //     navigate('/');
    
  // }, []);


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
