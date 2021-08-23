import { createStore } from 'redux';
import { inc, dec, rnd } from './actions';

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

const bindActionCreator = (creator, dispatch) => (...args) => {
  dispatch(creator(...args));
};

const incDispatch = bindActionCreator(inc, dispatch);

const decDispatch = bindActionCreator(dec, dispatch);

const rndDispatch = bindActionCreator(rnd, dispatch);

document
  .getElementById('inc')
  .addEventListener('click', incDispatch)

document
  .getElementById('dec')
  .addEventListener('click', decDispatch);

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    rndDispatch(payload);
  });

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
};

store.subscribe(update);


