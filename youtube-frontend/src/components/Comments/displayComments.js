//import axios from "axios";
import React from "react";
import "./displayComments.css";

function DisplayComments(props) {
  const comments = props.comments;
  //const [comments, updateComment] = useState(null);

  // useEffect(() => {
  //   updateComment(props.comments);
  // }, [props.comments]);

  if (!comments) {
    return null;
  }

  const likeComment = async (comment) => {
    alert(`Comment liked ${comment.likes + 1} times. ${comment._id}`);
    //const likes = { likes: comment.likes };
    // await axios
    //   .put(`http://localhost:5000/${props.videoId}/${comment._id}`, likes)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  const dislikeComment = (comment) => {
    alert(`Comment disliked ${comment.dislikes} times`);
  };

  const displayComments = comments.map((comment, index) => {
    // const [likes, updateLikes] = useState(comment.likes);
    // const [dislikes, updateDisikes] = useState(comment.dislikes);
    return (
      <div key={index}>
        <p>{comment.text}</p>
        <i className="far fa-thumbs-up" onClick={() => likeComment(comment)}>
          {comment.likes}
        </i>
        <i
          className="far fa-thumbs-down"
          onClick={() => dislikeComment(comment)}
        >
          {comment.dislikes}
        </i>
      </div>
    );
  });
  return displayComments;
}

export default DisplayComments;
