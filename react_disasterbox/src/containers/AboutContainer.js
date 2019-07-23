import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_SITE } from '../actions/LoadedSiteActions';
import About from '../components/about';

class AboutContainer extends Component{

    render(){
        return(
            <About></About>
        );
    };
};

const mapDispatchToProps = dispatch => dispatch({type: SET_SITE, payload: "About"});

export default connect(null, mapDispatchToProps)(AboutContainer);