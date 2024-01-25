import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import '../css/MenuContent.css'

export default function MenuContent() {
  const quiz = ['토익 단어 (Day 1~10)', '토익 단어 (Day 11~20)', '토익 단어 (Day 21~30)'];
  const sat = ['수능 단어 (초급)', '수능 단어 (중급)', '수능 단어 (고급)'];
  const management = ['프로필', '프로젝트 1', '프로젝트 2'];
  let management_lis= [];
  let quiz_lis = [];
  let sat_lis = [];
  
  for(let i =0;i<management.length;i++) {
    management_lis.push(<NavLink key={i} to={'management/'+i}><button className='menu_item'><PersonIcon /><span>{management[i]}</span></button></NavLink>)
  }

  for(let i =0; i<quiz.length; i++) {
    quiz_lis.push(<NavLink key ={i} to={'toeic/'+i}><button className='menu_item'><MenuBookIcon /><span>{quiz[i]}</span></button></NavLink>)
  }

  for(let i =0; i<sat.length; i++) {
    sat_lis.push(<NavLink key ={i} to={'sat/'+i}><button className='menu_item'><MenuBookIcon /><span>{sat[i]}</span></button></NavLink>)
  }
  
  return (
    <div className='side_bar'>
      <div className='side_bar_top'>
          <div className="menuContent_logo">
            <AcUnitIcon sx={{ color: '#3fa5f0'}}/>
            <span className='logo_text'>VANTAGE</span>
          </div>
      </div>
      
      <div className='side_bar_menu'>
        <div className='menu_title'>MANAGEMENT</div>
        {management_lis}
        
        <div className='menu_title'>TOEIC</div>
        {quiz_lis}

        <div className='menu_title'>수능</div>
        {sat_lis}
      </div>
      
    </div>
  );
}

