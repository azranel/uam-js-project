import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import RouterElement from './components/Router';

// Render the main component into the dom
if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      return [rootInstance];
    }
  });
}
ReactDOM.render(<RouterElement />, document.getElementById('app'));
