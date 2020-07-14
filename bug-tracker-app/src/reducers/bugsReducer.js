const initialState = [
    { id: 1, name: 'Server communication failure', isClosed : false, createdAt : new Date()},
    { id: 2, name: 'User actions not recognized', isClosed: false, createdAt: new Date() },
    { id: 3, name: 'Application not responding', isClosed: false, createdAt: new Date() },
];
function bugsReducer(currentState = initialState, action){
    return currentState;
}
export default bugsReducer;