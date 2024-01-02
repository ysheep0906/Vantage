import React from "react";
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const avatar_setting ={
  width: '30px',
  height: '30px'
}

export default function Header() {
  return (
    <div className="header_root">
      <div className="header">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <div className="header_blank"></div>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <button className="profile">
          <Avatar sx={avatar_setting}></Avatar>
          <span className="state"></span>
          <span className="name">영또사랑시니못생겼어 님</span>
        </button>
      </div>
    </div>
  );
}