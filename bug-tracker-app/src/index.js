import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import BugTracker from './bugTracker';
import appStore from './store';

/* 
import * as calc from './calc';
console.log(calc); 
*/

/* import * as calc from './calc';
const { add } = calc; */

/* import { add } from './calc' */

//importing the default export
/* import calc from './calc';
console.log(calc); */

function renderApp(){
  const bugs = appStore.getState();
  ReactDOM.render(
    <React.StrictMode>
      <h1>Bug Tracker</h1>
      <hr/>
      <BugTracker bugs={bugs}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
