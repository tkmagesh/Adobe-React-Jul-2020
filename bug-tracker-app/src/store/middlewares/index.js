import { applyMiddleware } from "redux";
import loggerMiddleware from './loggerMiddleware';
import asyncMiddleware from './asyncMiddleware';

export default applyMiddleware(asyncMiddleware, loggerMiddleware);