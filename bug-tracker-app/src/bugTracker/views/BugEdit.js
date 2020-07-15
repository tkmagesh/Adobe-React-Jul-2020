import React, { Component, useState } from 'react';

/* class BugEdit extends Component {
    state = {
        newBugName: ''
    };
    render() {
        const { addNew } = this.props;
        const { newBugName } = this.state;
        return (
            <section className="edit">
                <label htmlFor="">Bug Name :</label>
                <input type="text" onChange={evt => this.setState({ newBugName: evt.target.value })} />
                <input type="button" value="Add New" onClick={_ => addNew(newBugName)} />
            </section>
        )
    }
} */

const BugEdit = ({addNew}) => {
    const [ newBugName, setNewBugName ] = useState('');
    return (
        <section className="edit">
            <label htmlFor="">Bug Name :</label>
            <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
            <span> [ {newBugName.length} ] </span>
            <input type="button" value="Add New" onClick={_ => addNew(newBugName)} />
        </section>
    )
}

export default BugEdit;