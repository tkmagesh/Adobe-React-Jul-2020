import React from 'react';
import BugItem from './BugItem';

const BugList = ({ bugs, toggle, remove }) => {
    const bugItems = bugs.map(bug => (<BugItem key={bug.id} {...{ bug, toggle, remove }} />));
    return (
        <section className="list">
            <ol>
                {bugItems}
            </ol>
            <input type="button" value="Remove Closed" />
        </section>
    )
}

export default BugList;