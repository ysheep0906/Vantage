import React from "react";
import IconButton from '@mui/material/IconButton';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";
import '../css/ToeicQuiz.css'

export default function ToeicQuiz() {
  const [bookmark, setBookmark] = useState(0);

  const bookmarkOnclick = () => {
    if (bookmark === 0)
      setBookmark(1);
    else 
      setBookmark(0);
  }

  return (
    <div className="quiz_main">
      <div className="quiz_header">
        <IconButton>
          <HeadphonesIcon />
        </IconButton>
        <IconButton
          onClick={bookmarkOnclick}>
          <StarIcon color={bookmark === 0 ? "default" : "primary"} />
        </IconButton>
      </div>

      <div className="word_root">
        <p className="word">outstanding</p>
        <p className="pronunciation">[aʊtˈstændɪŋ]</p>
      </div>

      <div className="choices">
        <button>뛰어난, 걸출한</button>
        <button>해체하다</button>
        <button>조사하다</button>
        <button>균일한</button>
      </div>
      
    </div>
  );
}