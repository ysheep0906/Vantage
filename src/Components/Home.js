import React from "react";
import { Link } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import '../css/Home.css';

export default function Home() {
  return (
    <div className="main">
      <div className="Header">
        <button className="menuContent_logo">
          <AcUnitIcon sx={{ color: '#3fa5f0' }} />
          <span className='logo_text'>Vantage</span>
        </button>
        <Link to='kr'><button className="start">시작하기</button></Link>
      </div>
    </div>
  );
} 