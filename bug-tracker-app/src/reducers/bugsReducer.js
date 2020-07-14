const initialState = [];

function bugsReducer(currentState = initialState, action){
    if (action.type === 'ADD_NEW_BUG')
        return [...currentState, action.payload];
    return currentState;
}
export default bugsReducer;