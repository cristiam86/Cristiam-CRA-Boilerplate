import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Form from './pages/Form';
import Icons from './pages/Icons';
import './scss/globals/index.scss';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/icon" component={Icons} />
          <Route path="/form" component={Form} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
