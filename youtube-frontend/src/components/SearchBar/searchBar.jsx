import React from "react";
import "./searchBar.css";

function SearchBar(props) {
  return (
    <div className="w-100 center input-group mb-3 search-bar-nav">
      <form className="">
        <input
          className="mx-auto search-box"
          type="text"
          onChange={props.handleChange}
        ></input>
        <i className="fas fa-search search-icon" onClick={props.getData}></i>
      </form>
    </div>
  );
}

export default SearchBar;
