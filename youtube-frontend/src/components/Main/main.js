import React, { Component } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/searchBar";
import VideoSearchResult from "../VideoSearchResult/videoSearchResult";
import VideoPlayer from "../VideoPlayer/videoPlayer";
import DisplayComments from "../Comments/displayComments";
import { key, max } from "../../api/apiKey";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: "",
      videoResults: [],
      selectedVideoId: null,
      selectedVideoDetails: null,
      videoComments: null,
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

  selectVideoToPlay = async (videoToPlay) => {
    const videoId = videoToPlay.id.videoId;

    this.setState({
      selectedVideoId: videoId,
      selectedVideoDetails: videoToPlay,
      videoComments: null,
    });

    await axios
      .get(`http://localhost:5000/api/videos/${videoId}`)
      .then((res) => {
        this.setState({
          videoComments: res.data,
        });
        console.log(res.data[0]);
        console.log(res.data[0].text);
      })
      .catch((err) => {
        console.log(err);
      });
    //console.log(this.state.selectedVideoDetails);
  };

  render() {
    return (
      <>
        <SearchBar handleChange={this.handleChange} getData={this.getData} />
        <div>
          <VideoPlayer videoDetails={this.state.selectedVideoDetails} />
          <DisplayComments comments={this.state.videoComments} />
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
