import React from "react";
//import CommentBox from "../Comments/commentBox";

function VideoPlayer(props) {
  const videoDetails = props.videoDetails;

  if (!videoDetails) {
    return null;
  } else {
    let videoSrc = `https://www.youtube.com/embed/${videoDetails.id.videoId}`;
    return (
      <div>
        <div>
          <iframe src={videoSrc} title={videoDetails.snippet.title}></iframe>
          <div>Title: {videoDetails.snippet.title}</div>
          <div>Description: {videoDetails.snippet.description}</div>
        </div>
        <div>{/* <CommentBox /> */}</div>
      </div>
    );
  }
}

export default VideoPlayer;
