import { createStore, bindActionCreators } from 'redux';
import * as actions from './actions';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'RND':
      return state + action.payload;

    case 'INC':
      return state + 1;

    case 'DEC':
      return state - 1;

    default:
      return state;
  }
};

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document
  .getElementById('inc')
  .addEventListener('click', inc)

document
  .getElementById('dec')
  .addEventListener('click', dec);

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    rnd(payload);
  });

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
};

store.subscribe(update);
