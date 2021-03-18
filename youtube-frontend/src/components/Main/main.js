import React, { Component } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/searchBar";
import VideoSearchResult from "../VideoSearchResult/videoSearchResult";
import VideoPlayer from "../VideoPlayer/videoPlayer";
import { key, max } from "../../api/apiKey";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: "",
      videoResults: [],
      selectedVideo: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchCriteria: e.target.value });
  };

  // GET DATA FROM YOUTUBE BASED ON USERS SEARCH CRITERIA
  getData = async () => {
    await axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&q=${this.state.searchCriteria}&key=${key}`
      )
      .then((res) => {
        this.setState({ videoResults: res.data.items });
        console.log(this.state.videoResults);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  playVideo = (videoToPlay) => {
    this.setState({ selectedVideo: videoToPlay.id.videoId });
    console.log(videoToPlay.id.videoId);
    console.log(this.state.selectedVideo);
    console.log(videoToPlay);
  };

  render() {
    return (
      <div>
        <SearchBar handleChange={this.handleChange} getData={this.getData} />
        <VideoSearchResult
          videoResults={this.state.videoResults}
          playVideo={this.playVideo}
        />
        <VideoPlayer videoId={this.state.selectedVideo} />
      </div>
    );
  }
}

export default Main;
