import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/Home'
import Car from './containers/Business'
import Dashboard from './containers/Dashboard'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/business/:id" component={Car} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default Router;