import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import PageNotFound from '../components/PageNotFound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory();

const AppRouter = () =>(
    <Router history = {history}>
    <div>

    <Switch>
        <PublicRoute exact ={true} path = "/" component ={LoginPage}/>
        <PrivateRoute path = "/dashboard" component ={DashboardPage}/>
        <Route component = {PageNotFound}/>
    </Switch>
    </div>        
    </Router>
);

export default AppRouter;