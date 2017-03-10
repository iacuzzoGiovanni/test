import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

//Components
import Home from '../components/Home';
import Error from '../components/Error';

const Routerconfig = () => (
    <Router history={browserHistory}>
        <Route path="/" component={ Home } />
        <Route path="*" component={ Error } />
    </Router>
);

export default Routerconfig;