import React, { Component } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/searchBar";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchCriteria: e.target.value });
    console.log(this.state.searchCriteria);
  };

  handleSubmit = async (e) => {
    alert(`${this.state.searchCriteria}`);

    await axios
      .get(
        "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyDTN74_Qbo-rlHs4Nz6un15FD5ReEgNa8s&part=snippet,contentDetails,statistics,status"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.preventDefault();
  };

  render() {
    return (
      <SearchBar
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Main;
