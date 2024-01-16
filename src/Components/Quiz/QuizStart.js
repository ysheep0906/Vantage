import React from "react";
import { Link } from "react-router-dom";
import '../../css/Quiz/QuizStart.css'

export default function QuizStart(props) {
  return (
    <div className="quiz_start">
      <p>Are You Ready?</p>
      <div class="progress">
        <div class="droplet_spinner">
          <div class="droplet"></div>
          <div class="droplet"></div>
          <div class="droplet"></div>
        </div>
      </div>
      <button className="start" onClick={props.onStartClick}>시작하기</button>
    </div>
  );
}