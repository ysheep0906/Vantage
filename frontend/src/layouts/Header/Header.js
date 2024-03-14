import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import '../../css/layout/Header.css';
import profileImage from '../../asset/images/profile.jpg'
import { bearerAtom, nicknameAtom, emailAtom, jobAtom, addressAtom, birthDateAtom } from "../../recoil/atoms";
import axios from "axios";

const avatar_setting ={
  width: '30px',
  height: '30px'
}

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const bearer = useRecoilValue(bearerAtom);
  const [nickname, setNickname] = useRecoilState(nicknameAtom);
  const setEmail = useSetRecoilState(emailAtom);
  const setJob = useSetRecoilState(jobAtom);
  const setAddress = useSetRecoilState(addressAtom);
  const setBirthDate = useSetRecoilState(birthDateAtom);

  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleLogout = async () => {
    navigate('/');
    //setBearer('')
  };

  useEffect(() => {
    axios.get('http://localhost:8080/user/info', {
        headers: { Authorization: `Bearer ${bearer}`}
      }).then(response => {
        console.log('H');
        setNickname(response.data.data.nickname);
        setEmail(response.data.data.email);
        setJob(response.data.data.job);
        setAddress(response.data.data.address);

        const date = response.data.data.birthDate;
        setBirthDate(date.substr(0,4) + '년 ' + date.substr(4,2) + '월 ' + date.substr(6,2) + '일');
     })
    .catch((error) => {
        console.log('error ' + error);
     });     
  }, [bearer, setAddress, setBirthDate, setEmail, setJob, setNickname]);
  

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
          <span className="name">{nickname} 님</span>
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
          <MenuItem onClick={()=>{handleClose(); handleLogout();}}>
            <LogoutIcon sx={{marginRight: '10px', fontSize: '20px'}}/>
            <p className="menuitemTitle">로그아웃</p>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}