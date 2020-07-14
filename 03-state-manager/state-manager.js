var StateManager = (function(){
    var _currentState = undefined,
        _callbacks = [],
        _reducer = undefined;

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        if (typeof callback !== 'function') return;
        _callbacks.push(callback);
    }

    function notifySubscribers(){
        _callbacks.forEach(callback => callback());
    }

    function dispatch(action){
        var newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        notifySubscribers();
    }

    function createStore(reducer){
        if (!reducer || typeof reducer !== 'function')
            throw new Error('Invalid arguments');
        _reducer = reducer;
        var store = { getState, subscribe, dispatch };
        return store;
    }

    return { createStore };
})();