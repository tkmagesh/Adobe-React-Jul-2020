//sync
function getLocalBugs(){
    return [
        {id : 1, name : 'Local bug - 1', isClosed : false, createdAt : new Date()},
        { id: 2, name: 'Local bug - 2', isClosed : true, createdAt: new Date() },
        { id: 3, name: 'Local bug - 3', isClosed : false, createdAt: new Date() },
    ]
}

function load(){
    const bugs = getLocalBugs();
    const action = { type : 'INIT_BUGS', payload: bugs };
    return action;
}

export default load;