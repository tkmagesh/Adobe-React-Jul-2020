import bugApi from "../services/bugApi";

async function toggle(bugToToggle){
    const toggledBugData = {...bugToToggle, isClosed : !bugToToggle.isClosed};
    const toggledBug = await bugApi.save(toggledBugData);
    const action = { type : 'REPLACE_BUG', payload: toggledBug };
    return action;
}

export default toggle;