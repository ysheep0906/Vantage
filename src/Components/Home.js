import React from "react";
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function Home() {
  return (
    <div className="main">
      <div className="Header">
        <button className="menuContent_logo">
          <AcUnitIcon sx={{ color: '#3fa5f0' }} />
          <span className='logo_text'>Vantage</span>
        </button>
      </div>
    </div>
  );
} 