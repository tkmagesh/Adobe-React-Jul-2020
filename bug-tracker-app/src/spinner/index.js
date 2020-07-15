import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import spinnerActionCreators from './actions';

class Spinner extends Component {
    state = {
        delta: 0
    };
   shouldComponentUpdate(nextProps, nextState){
       return this.props.value !== nextProps.value || this.state.delta !== nextState.delta;
   }
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

/* 
function mapStateToProps(storeState){
    const spinnerValue = storeState.spinnerData;
    return { value : spinnerValue };
}

function mapDispatchToProps(dispatch){
    const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
    return spinnerActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Spinner); 
*/

export default connect(
    ({spinnerData}) => ({ value : spinnerData}),
    (dispatch) => bindActionCreators(spinnerActionCreators, dispatch)
)(Spinner);