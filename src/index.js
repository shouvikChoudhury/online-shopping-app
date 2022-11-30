import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Provider } from 'react-redux'
import configStore from './Store/configStore'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={configStore}>
      <Router><App /></Router>
    </Provider>

  </React.StrictMode>
);
