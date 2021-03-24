import React from "react";
import "./videoSearchResult.css";

function VideoSearchResult(props) {
  if (props.videoResults) {
    const videoResult = props.videoResults.map((el, index) => {
      return (
        <div key={index} className="">
          <img
            className="search-result-thumbnail"
            src={el.snippet.thumbnails.medium.url}
            alt={el.snippet.description}
            onClick={() => props.selectVideoToPlay(el)}
          ></img>
          <div className="title-description">
            <div>{el.snippet.title}</div>
            <div>{el.snippet.description}</div>
          </div>
          <hr></hr>
        </div>
      );
    });
    return videoResult;
  }
}

export default VideoSearchResult;
