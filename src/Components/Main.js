import React from "react";
import { Route, Routes} from "react-router-dom";
import QuizStart from "./QuizStart";
import ToeicQuiz from "./ToeicQuiz";
import '../css/Main.css'

export default function Main() {
  return (
    <div className="main">
      <div className="quiz">
        <Routes>
          <Route path='/' element={<QuizStart/>}></Route>
          <Route path='quiz' element={<ToeicQuiz />}></Route>
        </Routes>
      </div>
    </div>
  );
}