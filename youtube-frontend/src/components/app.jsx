import React, { Component } from "react";
import Header from "./Header/header";
import Main from "./Main/main";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
