import axios from "axios";
import React, { useState } from "react";
import "./commentBox.css";
// import React, { useState, useRef } from "react";
// import cn from "classnames";
// import "./commentBox.css";

function CommentBox(props) {
  const [comment, setComment] = useState({ text: "" });
  const [submitButton, setSubmitButton] = useState(true);

  const handleChange = (e) => {
    setComment({ text: e.target.value });
    console.log(comment);
    if (comment) setSubmitButton(false);
    //if (comment === undefined) submitButton = false;
  };

  const cancelComment = (e) => {
    e.preventDefault();
    alert(`Cancel`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Submit`);

    axios.post(`http://localhost:5000/api/videos/${props.videoId}`, comment);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="comment" onChange={handleChange}></input>
        <>
          <button type="button" onClick={cancelComment}>
            CANCEL
          </button>
          <input type="submit" disabled={submitButton} value="SEND"></input>
        </>
      </form>
    </>
  );
}

export default CommentBox;
