import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import App from './app';
import * as actions from './actions';
import reducer from './reducer';
import './index.css';

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        counter={store.getState()}
        inc={inc}
        dec={dec}
        rnd={() => {
          const payload = Math.floor(Math.random() * 10);
          rnd(payload);
        }}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

update();

store.subscribe(update);

