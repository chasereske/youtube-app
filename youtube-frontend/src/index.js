import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'; 
import 'bootstrap/dist/css/bootstrap.css';

const jsxElement = <h1>Youtube App</h1>;
console.log(jsxElement);

ReactDOM.render(<App />, document.getElementById('root'));