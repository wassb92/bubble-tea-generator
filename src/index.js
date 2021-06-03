import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, Option} from './App';
import ChangeName from './bubble_tea_name'

ReactDOM.render(
  <React.StrictMode>
    <ChangeName />
    <App />
    <Option />
  </React.StrictMode>,
  document.getElementById('root')
);