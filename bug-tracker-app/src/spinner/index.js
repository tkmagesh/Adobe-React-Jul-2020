import React, { Component } from 'react';

class Spinner extends Component {
    state = {
        delta: 0
    };

    render = () => {
        const { value, increment, decrement, doubleIncrement, doubleDecrement } = this.props;
        const { delta } = this.state;
        return (
            <div>
                <h3>Spinner</h3>
                <hr />
                <label> Delta : </label>
                <input type="number" onChange={evt => this.setState({ delta: evt.target.valueAsNumber })} />
                <br />
                <input type="button" value="Decrement" onClick={() => decrement(delta)} />
                <span> [ {value} ] </span>
                <input type="button" value="Increment" onClick={() => increment(delta)} />
                <br />
                <input type="button" value="Double Decrement" onClick={doubleDecrement} />
                <input type="button" value="Double Increment" onClick={doubleIncrement} />
            </div>
        )
    }
}

export default Spinner;