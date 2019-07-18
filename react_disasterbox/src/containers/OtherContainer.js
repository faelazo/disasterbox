import React, { Component } from 'react';
import { connect } from 'react-redux';
import OtherPage from '../components/other';

class OtherContainer extends Component{

    render(){
        return(
            <OtherPage handlerInc={this.props.onIncrement} handlerDec={this.props.onDecrement}></OtherPage>
        );
    };
};

const mapStateToProps = state => {return { valor: state}};
const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => {return dispatch({type: 'INCREMENT'})},
        onDecrement: () => {return dispatch({type: 'DECREMENT'})}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OtherContainer);