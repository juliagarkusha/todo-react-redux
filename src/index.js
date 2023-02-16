// External deps
import React from 'react';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';

// Local deps
import store from "./store";
import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
