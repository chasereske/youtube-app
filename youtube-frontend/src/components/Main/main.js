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
      selectedVideoId: null,
      selectedVideoDetails: null,
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

  selectVideoToPlay = (videoToPlay) => {
    this.setState({
      selectedVideoId: videoToPlay.id.videoId,
      selectedVideoDetails: videoToPlay,
    });
    console.log(this.state.selectedVideoDetails);
    this.getCommentsOnSelectedVideo();
  };

  // GET COMMENTS ON SELECTED VIDEO WHEN CLICKED
  getCommentsOnSelectedVideo = () => {
    axios.get(`http://localhost:5000/api/videos/xVz150jGhydm1a`).then((res) => {
      console.log(res.data);
    });
  };

  render() {
    return (
      <>
        <SearchBar handleChange={this.handleChange} getData={this.getData} />
        <div>
          <VideoPlayer videoDetails={this.state.selectedVideoDetails} />
          <VideoSearchResult
            videoResults={this.state.videoResults}
            selectVideoToPlay={this.selectVideoToPlay}
          />
        </div>
      </>
    );
  }
}

export default Main;
