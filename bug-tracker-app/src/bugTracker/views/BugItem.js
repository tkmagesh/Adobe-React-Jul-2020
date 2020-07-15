import React from 'react';

function BugItem({ bug, toggle, remove }) {
    const bugClass = 'bugname ' + (bug.isClosed ? 'closed' : '');
    return (
        <li>
            <div>ID : [{bug.id}]</div>
            <span className={bugClass} onClick={_ => toggle(bug)}>{bug.name}</span>
            <div className="datetime">{bug.createdAt.toString()}</div>
            <a href="#">More...</a>
            <br/>
            <input type="button" value="Remove" onClick={_ => remove(bug)} />
        </li>
    )
}

export default BugItem;