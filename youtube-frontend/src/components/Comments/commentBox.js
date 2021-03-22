import axios from "axios";
import React, { useEffect, useState } from "react";
import "./commentBox.css";
// import React, { useState, useRef } from "react";
// import cn from "classnames";
// import "./commentBox.css";

function CommentBox(props) {
  const [comment, setComment] = useState({ text: "" });
  const [submitButton, setSubmitButton] = useState(true);
  let [defaultRender, updateRender] = useState(
    <p onClick={showCommentForm}>Add Comment</p>
  );

  // TRACK AND STORE COMMENT TEXT
  const handleChange = (e) => {
    setComment({ text: e.target.value });
    if (comment !== "") setSubmitButton(false);
  };

  // CANCEL COMMENT FORM
  const cancelComment = (e) => {
    e.preventDefault();
    defaultRender = <p onClick={showCommentForm}>Add Comment</p>;
  };

  // SUBMIT COMMENT
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();

    if (comment !== "") {
      axios
        .post(`http://localhost:5000/api/videos/${props.videoId}`, comment)
        .then((res) => {
          console.log(res.data);
          defaultRender = <p onClick={showCommentForm}>Add Comment</p>;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // ADD COMMENT CLICK
  useEffect(() => {});

  function showCommentForm() {
    alert(`Clicked Comment Form`);
    //defaultRender = commentForm;
    updateRender(commentForm);
  }

  defaultRender = <p onClick={showCommentForm}>Add Comment</p>;

  const commentForm = (
    <form onSubmit={handleSubmit}>
      <input type="text" name="comment" onChange={handleChange}></input>
      <>
        <button type="button" onClick={cancelComment}>
          CANCEL
        </button>
        <input type="submit" disabled={submitButton} value="SEND"></input>
      </>
      <div></div>
    </form>
  );

  return <>{defaultRender}</>;
}

export default CommentBox;
