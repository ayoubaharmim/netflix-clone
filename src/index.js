import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {GlobalStyles} from './global-styles';
import 'normalize.css';

ReactDOM.render(
  <>
    <App />
    <GlobalStyles/>
  </>
  , document.getElementById('root')
);
