import React from "react";
import CommentBox from "../Comments/commentBox";
import "./videoPlayer.css";
// import DisplayComments from "../Comments/displayComments";

function VideoPlayer(props) {
  const videoDetails = props.videoDetails;

  if (!videoDetails) {
    return null;
  } else {
    const videoId = videoDetails.id.videoId;
    let videoSrc = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div>
        <div>
          <iframe
            className="video-frame"
            src={videoSrc}
            title={videoDetails.snippet.title}
          ></iframe>
          <div>Title: {videoDetails.snippet.title}</div>
          <div>Description: {videoDetails.snippet.description}</div>
          <CommentBox videoId={videoId} />
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
