//let prevBugId = 0
import bugApi from "../services/bugApi";
async function addNew(newBugName){
    const newBugData = {
        id : 0,
        name : newBugName,
        isClosed : false,
        createdAt : new Date()
    };
    const newBug = await bugApi.save(newBugData);
    const action = { type : 'ADD_NEW_BUG', payload : newBug };
    return action;
}

export default addNew;