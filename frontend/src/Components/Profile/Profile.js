import React, { useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Rank from "./Rank";
import UserDetails from "./UserDetails";
import Progress from "./Progress";
import profileImage from '../../asset/images/profile.jpg'
import profileBackgroundImage from '../../asset/images/background_image.jpg'
import '../../css/Profile/Profile.css'
import { useRecoilValue } from "recoil";
import { nicknameAtom, jobAtom, addressAtom, birthDateAtom } from "../../recoil/atoms";

const avatar_setting = {
  width: '92px',
  height: '92px',
}
const progressData = [
  {
    id: 1,
    title: '토익 단어 (초급)',
    total: 850,
    success: 585,
    percent: 70,
  },
  {
    id: 2,
    title: '토익 단어 (중급)',
    total: 540,
    success: 285,
    percent: 32,
  },
  {
    id: 3,
    title: '토익 단어 (고급)',
    total: 50,
    success: 15,
    percent: 7,
  },
  {
    id: 4,
    title: '수능 단어 (초급)',
    total: 950,
    success: 624,
    percent: 100,
  },
  {
    id: 5,
    title: '수능 단어 (중급)',
    total: 650,
    success: 245,
    percent: 54,
  },
  {
    id: 6,
    title: '수능 단어 (고급)',
    total: 60,
    success: 32,
    percent: 0,
  },
]
export default function Profile() {
  const nickname = useRecoilValue(nicknameAtom);
  const job = useRecoilValue(jobAtom);
  const address = useRecoilValue(addressAtom);
  const birthDate = useRecoilValue(birthDateAtom);


  let lis = [];
  for(let i=0; i <progressData.length; i++) {
    lis.push(<Progress key={i}
      title={progressData[i].title} 
      total={progressData[i].total}
      success={progressData[i].success}
      percent={progressData[i].percent}/>
      )
  }

  useEffect(()=> {

  },[])

  return (
    <div className="main">

      {/* Profile */}
      <div className="profile">
        <div className="profile-image">
          <img src={profileBackgroundImage} alt="User Cover"
            height='100%' width='100%' style={{ 'objectFit': 'cover' }} />
        </div>
        <div className="profile-description">
          <div className="user">
            <Avatar src={profileImage === '' ? '' : profileImage} sx={avatar_setting}></Avatar> 
            <div className="name">
              <h3>{nickname}</h3>
            </div>
          </div>
          <div className="blank"></div>
          <div className="information">
            <div><ApartmentIcon /><span>{job}</span></div>
            <div><PlaceIcon /><span>{address}</span></div>
            <div><CalendarMonthIcon /><span>{birthDate} 가입</span></div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="overview">
        <div className="userOverview">
          <Rank />
          <UserDetails />
        </div>
        <div className="userProgress">
          {lis}
        </div>
      </div>

    </div>
  );
}