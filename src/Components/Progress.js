import React from "react"
import LinearProgress from '@mui/material/LinearProgress';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import '../css/Progress.css';

export default function Progress(props) {

  const status = () => {
    if(props.percent === 100) return <button className="completed">완료</button>
    else if(props.percent > 0) return <button className="inProgress">진행 중</button>
    else return <button className="pending">시작 전</button>
  }

  return (
    <div className="progressItem">
      <div className="titleIcons">
        <MenuBookIcon sx={{
          backgroundColor: 'rgb(242, 249, 254)',
          color: '#3fa5f0',
          padding: '8px',
          borderRadius: '10px'
        }}
        />
        {status()}
      </div>
      <h5>{props.title}</h5>
      <p>총 개수: {props.total}</p>
      <p>맞은 개수: {props.success}</p>
      <div className="progressBar">
        <span><LinearProgress value={props.percent} variant="determinate" /></span>
        <h6>{props.percent + '%'}</h6>
      </div>
    </div>
  );
}

