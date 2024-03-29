import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../containers/HomeContainer';
import About from '../containers/AboutContainer';
import Counter from '../containers/CounterContainer';
import NotFound from '../components/errors/NotFound';
import HeaderHome from '../components/HeaderSite';
import FooterHome from '../components/FooterSite';

const routing = () => {

    return (
        <Router>
            <HeaderHome></HeaderHome>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/counter" component={Counter} />
                <Route component={NotFound} />
            </Switch>
            <FooterHome></FooterHome>
        </Router>
    )
};

export default routing;