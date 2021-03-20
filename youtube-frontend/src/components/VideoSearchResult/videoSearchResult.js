import React from "react";

function VideoSearchResult(props) {
  if (props.videoResults) {
    const videoResult = props.videoResults.map((el, index) => {
      return (
        <div key={index} className="mx-auto">
          <img
            className=""
            src={el.snippet.thumbnails.medium.url}
            alt={el.snippet.description}
            onClick={() => props.selectVideoToPlay(el)}
          ></img>
          <div className="">
            <div>{el.snippet.title}</div>
            <div>{el.snippet.description}</div>
          </div>
        </div>
      );
    });
    return videoResult;
  }
}

export default VideoSearchResult;
