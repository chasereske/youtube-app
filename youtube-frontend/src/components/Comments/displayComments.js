import axios from "axios";
import React, { useState, useEffect } from "react";
import DisplayReplies from "../Replies/displayReplies";
//import ReplyTextBox from "../Replies/replyTextBox";
import "./displayComments.css";

function DisplayComments(props) {
  const comments = props.comments;
  //const [showReplyBox, setShowReplyBox] = useState(false);
  const [displayForm, setDisplayForm] = useState(null);

  // DISPLAY REPLY BOX
  const displayReplyBox = (e) => {
    //setShowReplyBox(true);

    setDisplayForm(
      <form onSubmit={postReply}>
        <textarea name="reply"></textarea>
        <button onClick={cancelReply}>Cancel</button>
        <button type="submit">Reply</button>
      </form>
    );

    function postReply() {}
    function cancelReply() {}
  };

  if (!comments) {
    return null;
  }

  // LIKE COMMENT
  const likeComment = async (comment) => {
    await axios
      .put(
        `http://localhost:5000/api/videos/${props.videoId}/like-comments/${comment._id}`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // DISLIKE COMMENT
  const dislikeComment = async (comment) => {
    comment.dislikes += 1;
    await axios
      .put(
        `http://localhost:5000/api/videos/${props.videoId}/dislike-comments/${comment._id}`
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  const displayComments = comments.map((comment, index) => (
    <div key={index} className="comment-text">
      <p>{comment.text}</p>
      <i
        className="far fa-thumbs-up like-unlike-btn"
        onClick={() => likeComment(comment)}
      ></i>
      <span className="likes-num">{comment.likes}</span>
      <i
        className="far fa-thumbs-down like-unlike-btn"
        onClick={() => dislikeComment(comment)}
      ></i>
      <span className="likes-num">{comment.dislikes}</span>
      <span className="reply-button" onClick={displayReplyBox}>
        reply
      </span>
      <div>{displayForm}</div>
      {/* <ReplyTextBox /> */}
      <div>
        <DisplayReplies
          replies={comment.replies}
          like={likeComment}
          dislike={dislikeComment}
        />
      </div>
      <hr></hr>
    </div>
  ));

  return displayComments;
}

export default DisplayComments;

//showReplyBox={showReplyBox}
