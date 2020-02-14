import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from 'src/components/NavBar/NavBar';

// Pages
import Page1 from 'src/routes/Page1/Page';
import Page2 from 'src/routes/Page2/Page';

const rootElement = document.getElementById('root');
const root = (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/1' component={Page1} />
      <Route exact path='/2' component={Page2} />
    </Switch>
  </Router>
);

render(root, rootElement);
