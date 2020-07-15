import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import BugTracker from './bugTracker';
import Spinner from './spinner';

import appStore from './store';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => (
  <div>
    <p>Duis ullamco magna eu ea. Mollit labore quis labore laborum. Cupidatat irure non eiusmod dolore ullamco sit aliquip esse est tempor aute. Incididunt magna ipsum sunt sit minim officia eu est quis ea occaecat officia non eu. Ullamco ipsum quis officia nostrud nulla nulla elit. Occaecat ut eiusmod qui dolore officia pariatur do mollit magna. Exercitation magna voluptate esse ad reprehenderit laboris ullamco culpa anim aliqua dolore eu commodo.</p>
    <p>Consectetur Lorem aliquip irure dolor elit voluptate. Eiusmod proident pariatur adipisicing laborum officia non proident. Nulla sunt amet laborum est adipisicing quis veniam.</p>
  </div>
);

ReactDOM.render(
    <Provider store={appStore} >
      <React.StrictMode>
        <h1>Bug Tracker</h1>
        <hr></hr>
        <Router>
          <div>
            <span>
              [ <Link to="/">Home</Link> ]
            </span>
            <span>
            [ <Link to="/bugs">Bugs</Link> ]
            </span>
            <span>
            [ <Link to="/spinner">Spinner</Link> ]
            </span>
          </div>
          <div>
          <Switch>
            <Route path="/bugs">
              <BugTracker />
            </Route>
            <Route path="/spinner">
              <Spinner />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </div>
      </Router>
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );

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