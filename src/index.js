import 'babel-polyfill'; //transpiles es6 features that aren't yet approved
import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
// import './styles/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

render(
  <Routes />,
  document.getElementById('app')
);