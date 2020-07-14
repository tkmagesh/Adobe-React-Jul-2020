import React, { Component, Fragment } from 'react';
import './index.css';
import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';


class BugTracker extends Component {
    render(){
        const { bugs, addNew, remove, toggle } = this.props;
        return(
            <Fragment>
                <BugStats bugs={bugs} /> 
                <BugSort />
                <BugEdit addNew={addNew} />
                <BugList {...{bugs, toggle, remove}} />
            </Fragment>
        )
    }
}

export default BugTracker;