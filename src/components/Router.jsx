import React from 'react';
import Router from 'react-router';
import Route from 'react-router';

import Menu from './Main';
import Contact from './Contact';

import { createHashHistory } from 'history';

let history = createHashHistory();

const RouterElement = React.createClass({
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={Menu}>
        </Route>
        <Route path="/contact" component={Contact} />
      </Router>
    );
  }
});

module.exports = RouterElement;
