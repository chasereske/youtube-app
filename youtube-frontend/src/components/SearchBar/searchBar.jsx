import React from "react";
import "./searchBar.css";

function SearchBar(props) {
  return (
    <div className="search-bar-nav">
      <form onSubmit={props.handleSubmit}>
        <label>Enter Search:</label>
        <input type="text" onChange={props.handleChange}></input>
        <i className="fas fa-search"></i>
        <input type="submit" value="submit"></input>
      </form>
      <button onClick={props.getData}>Fetch Songs Data</button>
    </div>
  );
}

export default SearchBar;
