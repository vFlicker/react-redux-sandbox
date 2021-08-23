import { createStore } from 'redux';

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

const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (payload) => ({ type: 'RND', payload });

const incDispatch = () => {
  dispatch(inc());
};

const decDispatch = () => {
  dispatch(dec());
};

const rndDispatch = (payload) => {
  dispatch(rnd(payload));
};

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


