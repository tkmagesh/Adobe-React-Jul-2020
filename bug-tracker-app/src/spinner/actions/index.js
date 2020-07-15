const spinnerActionCreators = {
    decrement(delta) {
        const action = { type: 'DECREMENT', payload: delta };
        return action;
    },
    increment(delta) {
        const action = { type: 'INCREMENT', payload: delta };
        return action;
    },
    doubleIncrement() {
        const action = { type: 'DOUBLE_INCREMENT' };
        return action;
    },
    doubleDecrement() {
        const action = { type: 'DOUBLE_DECREMENT' };
        return action;
    }
};
export default spinnerActionCreators;