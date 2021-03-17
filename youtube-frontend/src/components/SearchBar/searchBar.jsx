import React from "react";
import "./searchBar.css";

function SearchBar(props) {
  return (
    <div className="search-bar-nav">
      <form>
        <label>
          <input type="text" onChange={props.handleChange}></input>
          <i className="fas fa-search" onClick={props.getData}></i>
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
