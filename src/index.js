import React from 'react';
import { render } from 'react-dom';
import SimpleGoldenAcornApp from './acornCounter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <SimpleGoldenAcornApp />
  </Provider>
);

render(<App />, document.getElementById('root'));
