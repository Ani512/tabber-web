import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Login from '../components/LoginPage';
import Dashboard from '../components/Dashboard';
import Page404 from '../components/Page404';
import AddSection from '../components/AddSection';
import EditSection from '../components/EditSection';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={ history }>
        <Switch>
            <PublicRouter exact path="/" component={ Login } />
            <PrivateRouter path="/dash" component={ Dashboard } />
            <PrivateRouter path="/addSection" component={ AddSection } />
            <PrivateRouter path="/edit/:id" component={ EditSection } />
            <Route component={ Page404 } />
        </Switch>
    </Router>
);

export default AppRouter;