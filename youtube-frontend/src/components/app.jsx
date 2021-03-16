import React, { Component } from 'react';
import SearchBar from './SearchBar/searchBar'; 

class App extends Component {
    state = { }
    render() {
        return (
            <div className="container-fluid">
                <SearchBar />
            </div>
        );
    }
}

export default App;