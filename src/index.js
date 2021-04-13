import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './components';
import history from './history';
import { Router } from 'react-router-dom';
import './css/index.css';

ReactDOM.render(
  <Router history={history}>
    <Home />
  </Router>,
  document.getElementById('root')
);
