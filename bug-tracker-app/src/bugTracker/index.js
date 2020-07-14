import React, { Component, Fragment } from 'react';
import './index.css';

class BugTracker extends Component {
    render(){
        const { bugs } = this.props;
        const bugItems = bugs.map(bug => (
            <li key={bug.id}>
                {bug.isClosed ? (<span className="bugname closed">{bug.name}</span>) : (<span className="bugname">{bug.name}</span>) }
                <div className="datetime">{bug.createdAt.toString()}</div>
                <input type="button" value="Remove" />
            </li>
        ));
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
                    <input type="text" name="" id="" />
                    <input type="button" value="Add New" />
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