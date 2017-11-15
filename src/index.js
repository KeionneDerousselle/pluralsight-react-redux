import 'babel-polyfill'; //transpiles es6 features that aren't yet approved
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import Routes from './routes';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
