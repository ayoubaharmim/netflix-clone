import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {GlobalStyles} from './global-styles';

ReactDOM.render(
  <>
    <App />
    <GlobalStyles/>
  </>
  , document.getElementById('root')
);
