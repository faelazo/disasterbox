import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from '../App';
import Other from '../containers/OtherContainer';
import NotFound from '../components/NotFound';


const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/other/:id" component={Other} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default routing;