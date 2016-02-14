import React from 'react';
import Router from 'react-router';
import Route from 'react-router';

import Menu from './Main';
import Contact from './Contact';
import Order from './Order';
import Status from './Status';

import { createHashHistory } from 'history';

let history = createHashHistory();

const RouterElement = React.createClass({
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={Menu}>
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="/order" component={Order} />
        <Route path="/status/:orderId" component={Status} />
      </Router>
    );
  }
});

module.exports = RouterElement;
