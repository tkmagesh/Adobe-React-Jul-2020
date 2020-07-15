import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import middlewares from './middlewares';

const appStore = createStore(rootReducer, middlewares);

export default appStore;