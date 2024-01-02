import React from "react";
import { Link } from "react-router-dom";

export default function QuizStart() {
  return (
    <div className="quiz_start">
      <Link to="quiz"><button className="start">시작하기</button></Link>
    </div>
  );
}