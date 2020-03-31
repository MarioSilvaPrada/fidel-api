import React from 'react';
import { render } from 'react-dom';
// import 'normalize.css';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './routes/App/App';
import theme from './theme/theme';

// Pages
import PageNotFound from './routes/PageNotFound/PageNotFound';

const rootElement = document.getElementById('root');
const root = (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  </ThemeProvider>
);

render(root, rootElement);
