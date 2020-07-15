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
                <br/>
                <label>Description :</label>
                <textarea rows="5" cols="80" />
                <br/>
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
            <br />
            <label>Description :</label>
            <textarea rows="5" cols="80" />
            <br />
            <input type="button" value="Add New" onClick={_ => addNew(newBugName)} />
        </section>
    )
}

export default BugEdit;