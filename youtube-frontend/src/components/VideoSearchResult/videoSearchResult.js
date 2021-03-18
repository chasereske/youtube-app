import React from "react";

function VideoSearchResult(props) {
  //   const videoResults = props.videoResults;
  if (props.videoResults) {
    const videoResult = props.videoResults.map((el, index) => {
      return (
        <div key={index}>
          <img
            className=""
            src={el.snippet.thumbnails.medium.url}
            alt={el.snippet.description}
            onClick={() => props.playVideo(el)}
          ></img>
          <div className="">
            <div>{el.snippet.title}</div>
          </div>
        </div>
      );
    });
    return videoResult;
  }
}

export default VideoSearchResult;
