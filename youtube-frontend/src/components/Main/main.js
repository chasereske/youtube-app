import React, { Component } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/searchBar";
import { key, max } from "../../api/apiKey";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: "",
      videoResults: [],
    };
  }

  handleChange = (e) => {
    this.setState({ searchCriteria: e.target.value });
  };

  getData = async () => {
    await axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&${max}=1&q=${this.state.searchCriteria}&key=${key}`
      )
      .then((res) => {
        this.setState({ videoResults: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <SearchBar handleChange={this.handleChange} getData={this.getData} />
    );
  }
}

export default Main;
