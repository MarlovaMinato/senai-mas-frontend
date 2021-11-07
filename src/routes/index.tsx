import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Login} from '../pag/Login';
import { Register} from '../pag/Register';
import { Dashboard } from '../pag/Dashboard';
import { NotFound } from '../pag/NotFound';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/*" component={NotFound} />
    </Switch>
)

export default Routes;