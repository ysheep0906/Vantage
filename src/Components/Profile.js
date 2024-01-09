import React from "react";
import Avatar from '@mui/material/Avatar';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Rank from "./Rank";
import '../css/Profile.css';

const avatar_setting = {
  width: '92px',
  height: '92px'
}

export default function Profile() {

  return (
    <div className="main">

      {/* Profile */}
      <div className="profile">
        <div className="profile-image">
          <img src="https://picsum.photos/970/720" alt="User Cover"
            height='100%' width='100%' style={{ 'objectFit': 'cover' }} />
        </div>
        <div className="profile-description">
          <div className="user">
            <Avatar sx={avatar_setting}></Avatar>
            <div className="name">
              <h3>UI Designer</h3>
            </div>
          </div>
          <div className="blank"></div>
          <div className="information">
            <div><ApartmentIcon /><span>대학생</span></div>
            <div><PlaceIcon /><span>서울특별시</span></div>
            <div><CalendarMonthIcon /><span>2023년 1월 8일 가입</span></div>
          </div>
        </div>
      </div>

      <Rank />

    </div>
  );
}