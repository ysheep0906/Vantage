import React, { useEffect, useState,useCallback  } from "react";
import {useParams} from "react-router-dom";
import QuizStart from "../../Components/Quiz/QuizStart";
import ToeicQuiz from "../../Components/Quiz/ToeicQuiz";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LinearProgress from '@mui/material/LinearProgress';
import '../../css/Quiz/QuizMain.css';

export default function QuizMain(props) {
  const [level, setLevel] = useState('');
  const {id} = useParams();
  const topic = props.topic === 'toeic' ? '토익 단어' : '수능 단어';
  const percent = 40;
  let dayList = [];
  // const [nowId, setNowId] = useState(id); // 토익 전부 한 컴포넌트로 되어있기 때문에 state는 유지, params.id는 바뀜

  const status = () => {
    if(percent === 100) return <span className="completed">완료</span>
    else if(percent > 0) return <span className="inProgress">진행 중</span>
    else return <span className="pending">시작 전</span>
  }
  
  const SetTitle = useCallback( () => {
    if (id === '0') { setLevel('(초급)'); }
    else if (id === '1') { setLevel('(중급)'); }
    else { setLevel('(고급)'); }
  },[id]);

  useEffect (() => {
    // console.log('useEffect: ',id);
    SetTitle();
  }, [id, SetTitle]);

  for(let i = 0; i < 15; i++) {
    dayList.push(
      <tr className="day_item" key={i}>
        <td className="day">Day {i+1}</td>
        <td className="status">{status()}</td>
        <td className="progress"><span className="progress">
          <LinearProgress value={percent} variant="determinate" sx={{ width: '80%', borderRadius: '4px', height: '8px', marginRight: '10px' }} />
          <h6>{percent + '%'}</h6>
        </span></td>
        <td className="action"><button className="actionButton">입장</button></td>
      </tr>
    )
  }

  return (
    <div className="main">
      <div className="quiz_title">
        <span className="book_icon"><MenuBookIcon /></span>
        <span className="title">{topic + ' ' + level}</span>
      </div>

      <table className="quiz_list">
        <thead>
          <tr className="quiz_desc">
            <th>Day</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dayList}
        </tbody>
      </table>
      
    </div>
  );
}