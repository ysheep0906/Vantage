import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import '../css/Header.css'

const avatar_setting ={
  width: '30px',
  height: '30px'
}

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
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
        <button 
          className="profile"
          id='profile-button'
          aria-controls={open ? 'profile-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Avatar sx={avatar_setting}></Avatar>
          <span className="state"></span>
          <span className="name">영또사랑시니못생겼어 님</span>
        </button>

        <Menu
          id='profile-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'profile-button'
          }}
          
        >
          <MenuItem onClick={handleClose}>
            <PersonIcon sx={{marginRight: '10px'}}/>
            프로필
            </MenuItem>
          <MenuItem onClick={handleClose}>
            <Settings sx={{marginRight: '10px'}}/>
            설정
            </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <LogoutIcon sx={{marginRight: '10px'}}/>
            로그아웃
            </MenuItem>
        </Menu>
      </div>
    </div>
  );
}