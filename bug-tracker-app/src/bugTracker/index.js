import React, { Component, Fragment } from 'react';
import './index.css';

function BugItem({bug, toggle, remove}){
    const bugClass = 'bugname ' + (bug.isClosed ? 'closed' : '');
    return(
        <li>
            <span className={bugClass} onClick={_ => toggle(bug)}>{bug.name}</span>
            <div className="datetime">{bug.createdAt.toString()}</div>
            <input type="button" value="Remove" onClick={_ => remove(bug)} />
        </li>
    )
}

class BugTracker extends Component {
    state = {
        newBugName : ''
    };

    render(){
        const { bugs, addNew, remove, toggle } = this.props;
        const { newBugName } = this.state;
        const bugItems = bugs.map(bug => (<BugItem key={bug.id} {...{bug, toggle, remove}} />));
        const closedCount = bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
        return(
            <Fragment>
                <section className="stats">
                    <span className="closed">{closedCount}</span>
                    <span> / </span>
                    <span>{bugs.length}</span>
                </section>
                <section className="sort">
                    <label htmlFor="">Order By :</label>
                    <select name="" id="">
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <label htmlFor="">Descending : </label>
                    <input type="checkbox" name="" id="" />
                </section>
                <section className="edit">
                    <label htmlFor="">Bug Name :</label>
                    <input type="text" onChange={ evt => this.setState({newBugName : evt.target.value})} />
                    <input type="button" value="Add New" onClick={ _ => addNew(newBugName)} />
                </section>
                <section className="list">
                    <ol>
                        {bugItems}
                    </ol>
                </section>
                <input type="button" value="Remove Closed" />
            </Fragment>
        )
    }
}

export default BugTracker;