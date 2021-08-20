import React from 'react';
import HookSwitcher from '../hook-switcher';
import Counter from '../counter';
import MyContext from '../my-context';
import './app.css';

const App = () => {
  return (
    <MyContext.Provider value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, veritatis?">
      <HookSwitcher />
      <Counter />
    </MyContext.Provider>
  );
};

export default App;
