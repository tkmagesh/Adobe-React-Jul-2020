import { applyMiddleware } from "redux";
import loggerMiddleware from './loggerMiddleware';
import asyncMiddleware from './asyncMiddleware';
import promiseMiddleware from './promiseMiddleware';

export default applyMiddleware(promiseMiddleware, asyncMiddleware, loggerMiddleware);