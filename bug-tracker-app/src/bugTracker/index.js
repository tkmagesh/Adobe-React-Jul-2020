import React, { Component, Fragment } from 'react';
import './index.css';
import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';


class BugTracker extends Component {
    render(){
        const { bugs, addNew, remove, toggle, removeClosed } = this.props;
        return(
            <Fragment>
                <h3>Bugs</h3>
                <BugStats bugs={bugs} /> 
                <BugSort />
                <BugEdit addNew={addNew} />
                <BugList {...{bugs, toggle, remove, removeClosed}} />
            </Fragment>
        )
    }
}

export default BugTracker;