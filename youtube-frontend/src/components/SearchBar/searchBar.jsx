import React from "react";
import "./searchBar.css";

function SearchBar(props) {
  return (
    <div className="w-100">
      <form>
        <label>
          <input
            className="mx-auto"
            type="text"
            onChange={props.handleChange}
          ></input>
          <i className="fas fa-search" onClick={props.getData}></i>
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
