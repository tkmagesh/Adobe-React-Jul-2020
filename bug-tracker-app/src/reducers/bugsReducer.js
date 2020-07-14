const initialState = [];

function bugsReducer(currentState = initialState, action){
    if (action.type === 'ADD_NEW_BUG'){
        return [...currentState, action.payload];
    }
    if (action.type === 'REMOVE_BUG'){
        return currentState.filter(bug => bug.id !== action.payload.id)
    }
    if (action.type === 'REPLACE_BUG'){
        const bugToReplace = action.payload;
        return currentState.map(bug => bug.id === bugToReplace.id ? bugToReplace : bug);
    }
    if (action.type === 'INIT_BUGS'){
        return action.payload;
    }
    return currentState;
}
export default bugsReducer;