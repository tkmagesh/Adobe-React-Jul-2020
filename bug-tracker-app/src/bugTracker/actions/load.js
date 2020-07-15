//import axios from 'axios';
import bugApi from '../services/bugApi';

//sync
/* function getLocalBugs(){
    return [
        {id : 1, name : 'Local bug - 1', isClosed : false, createdAt : new Date()},
        { id: 2, name: 'Local bug - 2', isClosed : true, createdAt: new Date() },
        { id: 3, name: 'Local bug - 3', isClosed : false, createdAt: new Date() },
    ]
} */

//async
/* function getRemoteBugs(){
    var p = axios.get('http://localhost:3030/bugs');
    var p2 = p.then(function(response){
        return response.data;
    });
    return p2;
} */
async function load(){
    /* 
    const bugs = getLocalBugs();
    const action = { type : 'INIT_BUGS', payload: bugs };
    return action; 
    */

    //USING THE ASYNC MIDDLEWARE
    /* return function(dispatch){
        const p = getRemoteBugs();
        p.then(function(bugs){
            const action = { type: 'INIT_BUGS', payload: bugs };
            dispatch(action);
        });
    } */

    //using the promise middleware
    /* const p = getRemoteBugs();
    var p2 = p.then(function (bugs) {
        const action = { type: 'INIT_BUGS', payload: bugs };
        return action;
    });
    return p2; */

    /* return getRemoteBugs()
        .then(bugs => {
            const action = { type: 'INIT_BUGS', payload: bugs };
            return action;
        }) */

    //using async await
    /* const bugs = await getRemoteBugs()
    const action = { type: 'INIT_BUGS', payload: bugs };
    return action; */

    //using the bugApi
    const bugs = await bugApi.getAll();
    const action = { type: 'INIT_BUGS', payload: bugs };
    return action;
}

export default load;