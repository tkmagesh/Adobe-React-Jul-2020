const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.log(action);
    console.group('before');
    console.log(store.getState());
    console.groupEnd();
    next(action);
    console.group('after');
    console.log(store.getState());
    console.groupEnd();
    console.groupEnd();
}

export default loggerMiddleware;