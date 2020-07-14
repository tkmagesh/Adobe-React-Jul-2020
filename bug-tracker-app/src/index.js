import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* 
import * as calc from './calc';
console.log(calc); 
*/

/* import * as calc from './calc';
const { add } = calc; */

/* import { add } from './calc' */

//importing the default export
import calc from './calc';

console.log(calc);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
