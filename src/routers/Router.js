import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';
import Login from '../components/LoginPage';
import Dashboard from '../components/Dashboard';
import Page404 from '../components/Page404';
import AddSection from '../components/AddSection';
import EditSection from '../components/EditSection';
import Home from '../components/Home';
import AddURL from '../components/AddUrl';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={ history }>
        <Switch>
            <PublicRouter exact path="/" component={ Login } />
            <PrivateRouter exact path="/dash" component={ Dashboard } />
            <PrivateRouter exact path="/addSection" component={ AddSection } />
            <PrivateRouter exact path="/edit/:id" component={ EditSection } />
            <PrivateRouter exact path="/section/:id" component={ Home } />
            <PrivateRouter exact path="/section/:id/addURL" component={ AddURL } />
            <PublicRouter component={ Page404 } />
        </Switch>
    </Router>
);

export default AppRouter;