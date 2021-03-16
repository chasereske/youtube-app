import React from "react";
import "./searchBar.css";

function SearchBar(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          <input type="search" onChange={props.handleChange}></input>
          <i type="submit" class="fas fa-search"></i>
        </label>
      </form>
    </div>
  );
}
// function SearchBar(props) {
//     return (
//         <div className="row row-spacer">
//             <div className="col-md-12" style={{padding: 0}}>
//                 <div className="searchbar-nav">
//                     <h1>Youtube App SearchBar</h1>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default SearchBar;
