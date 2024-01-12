import React from "react";
import { Route, Routes} from "react-router-dom";
import QuizStart from "./QuizStart";
import ToeicQuiz from "./ToeicQuiz";
import '../../css/Quiz/QuizMain.css';

export default function QuizMain() {
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