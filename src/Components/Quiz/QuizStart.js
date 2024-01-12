import React from "react";
import { Link } from "react-router-dom";
import '../../css/Quiz/QuizStart.css'

export default function QuizStart() {
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
      <Link to="quiz"><button className="start">시작하기</button></Link>
    </div>
  );
}