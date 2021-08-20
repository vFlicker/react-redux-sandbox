import React from 'react';
import HookSwitcher from '../hook-switcher';
import MyContext from '../my-context';

const App = () => {
  return (
    <MyContext.Provider value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, veritatis?">
      <HookSwitcher />
    </MyContext.Provider>
  );
};

export default App;
