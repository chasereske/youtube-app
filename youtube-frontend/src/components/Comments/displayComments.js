import React, { useEffect, useState } from "react";
import "./displayComments.css";

function DisplayComments(props) {
  //   const comments = props.comments;
  const [comments, updateComment] = useState(null);

  useEffect(() => {
    updateComment(props.comments);
  }, [props.comments]);

  if (!comments) {
    return null;
  } else {
    const displayComments = comments.map((comment, index) => {
      return (
        <div key={index}>
          <p>{comment.text}</p>
          <i className="far fa-thumbs-up">{comment.likes}</i>
          <i className="far fa-thumbs-down">{comment.dislikes}</i>
        </div>
      );
    });
    return displayComments;
  }
}

export default DisplayComments;
