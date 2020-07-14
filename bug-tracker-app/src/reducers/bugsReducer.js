const initialState = [];

function bugsReducer(currentState = initialState, action){
    if (action.type === 'ADD_NEW_BUG'){
        return [...currentState, action.payload];
    }
    if (action.type === 'REMOVE_BUG'){
        return currentState.filter(bug => bug.id !== action.payload.id)
    }

    return currentState;
}
export default bugsReducer;