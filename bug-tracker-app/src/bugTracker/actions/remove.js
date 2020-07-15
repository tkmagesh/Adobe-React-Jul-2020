import bugApi from "../services/bugApi";
async function remove(bugToRemove){
    await bugApi.remove(bugToRemove);
    const action = { type : 'REMOVE_BUG', payload : bugToRemove };
    return action;
}

export default remove;