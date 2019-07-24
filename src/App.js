import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import * as routes from './constants/routes';
import Home from './Views/Home';
import Survey from './Views/Survey';
import Results from './Views/Results';
import NotFound from './Views/NotFound';

import { BodyWrapper } from './components/presentational/BodyWrapper'

function App() {
  return (
    <Router>
      <BodyWrapper>
        <Switch>
          <Route path={routes.HOME} exact component={Home} />
          <Route path={routes.SURVEY} exact component={Survey} />
          <Route path={routes.RESULTS} exact component={Results} />
          <Route component={NotFound} />
        </Switch> 
      </BodyWrapper>
    </Router>
  );
}

export default App;
