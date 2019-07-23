import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_SITE } from '../actions/LoadedSiteActions';
import Blog from '../components/blog';

class BlogContainer extends Component{

    render(){
        return(
            <Blog></Blog>
        );
    };
};

const mapDispatchToProps = dispatch => dispatch({type: SET_SITE, payload: "Blog"});

export default connect(null, mapDispatchToProps)(BlogContainer);