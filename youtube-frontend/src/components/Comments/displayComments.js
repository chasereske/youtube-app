import axios from "axios";
import React, { useState, useEffect } from "react";
import DisplayReplies from "../Replies/displayReplies";
import "./displayComments.css";

function DisplayComments(props) {
  const comments = props.comments;

  const [likes, updatedLikes] = useState(null);
  const [dislikes, updatedDislikes] = useState(null);

  //const [comments, updateComment] = useState(null);

  // useEffect(() => {
  //   updateComment(props.comments);
  // }, [props.comments]);

  // useEffect(() => {
  //   function likeComment(comment) {
  //     axios
  //       .put(
  //         `http://localhost:5000/api/videos/${props.videoId}/like-comments/${comment._id}`
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // });

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
    await axios
      .put(
        `http://localhost:5000/api/videos/${props.videoId}/dislike-comments/${comment._id}`
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  // DISPLAY REPLY BOX
  const displayReplyBox = () => {
    alert(`Reply to this comment`);
  };

  const displayComments = comments.map((comment, index) => {
    // updatedLikes(comment.likes);
    // updatedDislikes(comment.dislikes);
    return (
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
        <div>
          {comment.replies.map((rep, index) => {
            return (
              <p className="reply" key={index}>
                {rep.text}
              </p>
            );
          })}
        </div>
        <hr></hr>
      </div>
    );
  });
  return displayComments;
}

export default DisplayComments;

// <DisplayReplies replies={comment.replies.text} />
