import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/LoginPage';
import Dashboard from '../components/Dashboard';
import Page404 from '../components/Page404';
import Header from '../components/Header';
import AddSection from '../components/AddSection';

const Router = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={ App } />
            <Route path="/dash" component={ Dashboard } />
            <Route path="/addSection" component={ AddSection } />
            <Route component={ Page404 } />
        </Switch>
    </BrowserRouter>
);

export default Router;