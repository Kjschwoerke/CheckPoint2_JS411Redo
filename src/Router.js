import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from './containers/Home'
import Business from './containers/Business'
import Dashboard from './containers/Dashboard'
import Login from './components/Login.js'
import cookie from 'cookie'


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

console.log("this is the cookie in the router.js file: " + checkAuth())

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth() === true
            ? <Component {...props} />
            : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
            />
    )
}



const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/business/:id" component={Business} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default Router;