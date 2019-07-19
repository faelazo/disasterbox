import React, { Component } from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT} from '../actions/CounterActions';
import Counter from '../components/counter';

class CounterContainer extends Component{

    render(){
        return(
            <Counter onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} contador={this.props.contador}></Counter>
        );
    };
};

const mapStateToProps = state => {return {contador: state.CounterReducer}};
const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => {return dispatch({type: INCREMENT})},
        onDecrement: () => {return dispatch({type: DECREMENT})}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);