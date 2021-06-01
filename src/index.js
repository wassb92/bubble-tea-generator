import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, Bubbletea, Option} from './App';
import ChangeName from './bubble_tea'

ReactDOM.render(
  <React.StrictMode>
    <ChangeName />
    <App />
    <Bubbletea />
    <Option />
  </React.StrictMode>,
  document.getElementById('root')
);