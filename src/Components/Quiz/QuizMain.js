import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import QuizStart from "./QuizStart";
import ToeicQuiz from "./ToeicQuiz";
import '../../css/Quiz/QuizMain.css';

export default function QuizMain() {
  const {id} = useParams();
  const [nowId, setNowId] = useState(id); // 토익 전부 한 컴포넌트로 되어있기 때문에 state는 유지, params.id는 바뀜
  const [start, setStart] = useState(false);

  const handleStartTrue = () => {
    setStart(true);
  }

  // const handleStartFalse = () => {
  //   setStart(false);
  // }

  useEffect (() => {
    if(nowId !== id) {
      setStart(false);
      setNowId(id);
    }
  })
  return (
    <div className="main">
      <div className="quiz">
        {start === true ? <ToeicQuiz />: <QuizStart onStartClick={handleStartTrue}/>}
      </div>
    </div>
  );
}