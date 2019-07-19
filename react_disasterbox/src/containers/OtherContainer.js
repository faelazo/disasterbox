import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_SITE } from '../actions/LoadedSiteActions';
import OtherPage from '../components/other';

class OtherContainer extends Component{

    render(){
        return(
            <OtherPage></OtherPage>
        );
    };
};

const mapStateToProps = state => {return {LoadedSite: state.LoadedSiteReducer}};
const mapDispatchToProps = dispatch => dispatch({type: SET_SITE, payload: "Other"});

export default connect(mapStateToProps, mapDispatchToProps)(OtherContainer);