import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_SITE } from '../actions/LoadedSiteActions';
import App from '../App';

class AppContainer extends Component{

    render(){
        return(
            <App onLoadSite={this.props.loadSite}/>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        loadSite: (newSite) => dispatch({type: SET_SITE, payload: newSite})
    })
};

export default connect(null, mapDispatchToProps)(AppContainer);