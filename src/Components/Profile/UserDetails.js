import React from "react";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ApartmentIcon from '@mui/icons-material/Apartment';
import '../../css/Profile/UserDetails.css';

export default function UserDetails() {
  return (
    <div className="userDetails">
      <div className="title">
        <h5>프로필 정보</h5>
        <IconButton>
          <EditIcon fontSize="small" sx={{color: 'rgb(77, 95, 116)'}}/>
        </IconButton>
      </div>

      <div className="userData">
        <div className="userDataItem">
          <PersonOutlineIcon sx={{
            color: '#ffcb81',
            backgroundColor: '#fff4e3',
            borderRadius: '4px',
            width: '35px',
            height: '35px',
            padding: '4px',
            boxSizing: 'border-box'
          }}/>
          <div className="text">
            <p>닉네임</p>
            <h6>양파카</h6>
          </div>
        </div>
        <div className="userDataItem">
          <MailOutlineIcon sx={{
            color: '#3fa5f0',
            backgroundColor: 'rgb(242, 249, 254)',
            borderRadius: '4px',
            width: '35px',
            height: '35px',
            padding: '4px',
            boxSizing: 'border-box'
          }}/>
          <div className="text">
            <p>이메일</p>
            <h6>wlq94814@naver.com</h6>
          </div>
        </div>
        <div className="userDataItem">
          <ApartmentIcon sx={{
            color: '#ff316f',
            backgroundColor: '#ffd6e2',
            borderRadius: '4px',
            width: '35px',
            height: '35px',
            padding: '4px',
            boxSizing: 'border-box'
          }}/>
          <div className="text">
            <p>직업</p>
            <h6>대학생</h6>
          </div>
        </div>
        <div className="userDataItem">
          <PlaceIcon sx={{
            color: '#9d9eff',
            backgroundColor: '#e8e8ff',
            borderRadius: '4px',
            width: '35px',
            height: '35px',
            padding: '4px',
            boxSizing: 'border-box'
          }}/>
          <div className="text">
            <p>거주지</p>
            <h6>서울특별시</h6>
          </div>
        </div>
        <div className="userDataItem">
          <CalendarMonthIcon sx={{
            color: '#27ce88',
            backgroundColor: '#d4f5e7',
            borderRadius: '4px',
            width: '35px',
            height: '35px',
            padding: '4px',
            boxSizing: 'border-box'
          }}/>
          <div className="text">
            <p>가입 날짜</p>
            <h6>2023년 1월 8일</h6>
          </div>
        </div>
      </div>
    </div>
  );
}