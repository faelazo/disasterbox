import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_SITE } from '../actions/LoadedSiteActions';
import HomePage from '../components/home';

class HomeContainer extends Component{

    render(){
        return(
            <HomePage></HomePage>
        );
    };
};

const mapDispatchToProps = dispatch => dispatch({type: SET_SITE, payload: "Home"});

export default connect(null, mapDispatchToProps)(HomeContainer);