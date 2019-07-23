import React, { Component } from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT} from '../actions/CounterActions';
import { SET_SITE } from '../actions/LoadedSiteActions';
import Counter from '../components/blog/samples/counter';

class CounterContainer extends Component{


    render(){
        this.props.setSite();
        
        return(
            <Counter onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} contador={this.props.contador}></Counter>
        );
    };
};

const mapStateToProps = state => {return {contador: state.CounterReducer}};
const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => {return dispatch({type: INCREMENT})},
        onDecrement: () => {return dispatch({type: DECREMENT})},
        setSite: () => {return dispatch({type: SET_SITE, payload: "Counter"})}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);