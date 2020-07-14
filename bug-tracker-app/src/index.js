import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import { bindActionCreators } from 'redux';
import BugTracker from './bugTracker';
import bugActions from './bugTracker/actions';
import appStore from './store';

const bugActionDispatchers = bindActionCreators(bugActions, appStore.dispatch);

function renderApp(){
  const bugs = appStore.getState();
  ReactDOM.render(
    <React.StrictMode>
      <h1>Bug Tracker</h1>
      <hr/>
      <BugTracker bugs={bugs} {...bugActionDispatchers}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderApp();
appStore.subscribe(renderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


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