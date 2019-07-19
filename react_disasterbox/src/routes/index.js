import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../containers/HomeContainer';
import Other from '../containers/OtherContainer';
import Counter from '../containers/CounterContainer';
import NotFound from '../components/errors/NotFound';

const routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/other/:id" component={Other} />
                <Route path="/counter" component={Counter} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
};

export default routing;