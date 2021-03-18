import React from "react";

function VideoPlayer(props) {
  const videoId = props.videoId;
  let videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div>
      <iframe src={videoSrc} title={videoId}></iframe>
    </div>
  );
}

export default VideoPlayer;
