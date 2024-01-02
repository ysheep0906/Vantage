import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import QuizStart from "./QuizStart";
import ToeicQuiz from "./ToeicQuiz";

export default function Toeic() {
  const params =useParams();
  const toeicId = params.id;
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