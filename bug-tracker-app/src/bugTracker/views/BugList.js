import React from 'react';
import BugItem from './BugItem';
import bugActionCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const BugList = ({ bugs, toggle, remove, removeClosed }) => {
    const bugItems = bugs.map(bug => (<BugItem key={bug.id} {...{ bug, toggle, remove }} />));
    return (
        <section className="list">
            <ol>
                {bugItems}
            </ol>
            <input type="button" value="Remove Closed" onClick={ _ => removeClosed(bugs)} />
        </section>
    )
}

function mapStateToProps(storeState){
    const bugs = storeState.bugsData,
        spinnerValue = storeState.spinnerData;
    return { bugs : bugs.filter(bug => bug.id % 2 === spinnerValue % 2) };
}

function mapDispatchToProps(dispatch){
    const {toggle, remove, removeClosed} = bindActionCreators(bugActionCreators, dispatch);
    return { toggle, remove, removeClosed };
}

export default connect(mapStateToProps, mapDispatchToProps)(BugList);