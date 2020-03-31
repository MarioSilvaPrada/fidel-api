import React from 'react';
import { render } from 'react-dom';
// import 'normalize.css';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './routes/App/App';
import theme from './theme/theme';
// Pages
import Page1 from './routes/Page1/Page';
import Page2 from './routes/Page2/Page';
import PageNotFound from './routes/PageNotFound/PageNotFound';

// Components

const rootElement = document.getElementById('root');
const root = (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/1" component={Page1} />
        <Route exact path="/2" component={Page2} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  </ThemeProvider>
);

render(root, rootElement);
