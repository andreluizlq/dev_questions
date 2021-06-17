import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import PagesHome from './Home/index.js';
import PagesVerification from './Verification/index.js'
import PagesPreviousReports from './PreviousReports/index.js'
import PagesQuestions from './Questions/index.js';

import GlobalStyle from '../styles/global.js'

const Root = () => {
  return (
    <Router>
        <GlobalStyle/>
        <Switch>
            <Route exact path="/" component={PagesHome} />
            <Route exact path="/verification" component={PagesVerification} />
            <Route exact path="/previousReports" component={PagesPreviousReports} />
            <Route exact path="/questions" component={PagesQuestions} />
        </Switch>
    </Router>
  );
};

export default Root;
