import React, {Component, Fragment } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import bugActionCreators from './actions';

import './index.css';
import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';


 class BugTracker extends Component {
     componentDidMount = () => {         
        this.props.load();
     }
    render(){
        console.log(this.props.bugs);
        const { bugs, addNew} = this.props;
        return(
            <Fragment>
                <h3>Bugs</h3>
                <BugStats bugs={bugs} /> 
                <BugSort />
                <BugEdit addNew={addNew} />
                <BugList/>
            </Fragment>
        )
    }
}

/* const BugTracker = ({bugs, addNew}) => (
    <Fragment>
        <h3>Bugs</h3>
        <BugStats bugs={bugs} />
        <BugSort />
        <BugEdit addNew={addNew} />
        <BugList />
    </Fragment>
); */


/* function mapStateToProps(storeState){
    const bugs = storeState.bugsData;
    return { bugs : bugs };
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);  */

 export default connect(
    ({bugsData : bugs}) => ({bugs}),
    dispatch => bindActionCreators(bugActionCreators, dispatch)
)(BugTracker);