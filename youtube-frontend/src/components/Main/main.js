import React, { Component } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/searchBar";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: "",
      video: [],
    };
  }

  handleChange = (e) => {
    this.setState({ searchCriteria: e.target.value });
    console.log(this.state.searchCriteria);
  };

  handleSubmit = async (e) => {
    alert(`${this.state.searchCriteria}`);

    e.target.preventDefault();
  };

  getData = async () => {
    // console.log(`Button`);
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=&part=snippet,statistics`
      )
      .then((res) => {
        console.log();
        this.setState({ video: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <SearchBar
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        getData={this.getData}
      />
    );
  }
}

export default Main;
