import React from "react";
import '../../css/Quiz/QuizStart.css'

export default function QuizStart(props) {
  return (
    <div className="quiz">
      <div className="quiz_start">
        <p>Are You Ready?</p>
        <div className="progress">
          <div className="droplet_spinner">
            <div className="droplet"></div>
            <div className="droplet"></div>
            <div className="droplet"></div>
          </div>
        </div>
        <button className="start" onClick={props.onStartClick}>시작하기</button>
      </div>
    </div>
  );
}