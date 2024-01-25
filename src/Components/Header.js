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
import profileImage from '../asset/images/profile.jpg'

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
          <Avatar src={profileImage} sx={avatar_setting}></Avatar>
          <span className="state"></span>
          <span className="name">양신희 님</span>
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
            <PersonIcon sx={{marginRight: '10px', fontSize: '20px'}}/>
            <p className="menuitemTitle">프로필</p>
            </MenuItem>
          <MenuItem onClick={handleClose}>
            <Settings sx={{marginRight: '10px', fontSize: '20px'}}/>
            <p className="menuitemTitle">설정</p>
            </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <LogoutIcon sx={{marginRight: '10px', fontSize: '20px'}}/>
            <p className="menuitemTitle">로그아웃</p>
            </MenuItem>
        </Menu>
      </div>
    </div>
  );
}