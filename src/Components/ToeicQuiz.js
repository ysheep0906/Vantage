import React from "react";
import IconButton from '@mui/material/IconButton';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";

export default function ToeicQuiz() {
  const [bookmark, setBookmark] = useState(0);

  const bookmarkOnclick = () => {
    if (bookmark === 0)
      setBookmark(1);
    else 
      setBookmark(0);
  }

  return (

      <div className="quiz_header">
        <IconButton>
          <HeadphonesIcon />
        </IconButton>
        <div className="quiz_header_blank"></div>
        <IconButton
          onClick={bookmarkOnclick}>
          <StarIcon color={bookmark === 0 ? "default" : "primary"} />
        </IconButton>
      </div>
  );
}