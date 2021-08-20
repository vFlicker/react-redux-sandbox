import React from 'react';
import HookSwitcher from '../hook-switcher';
import { MyProvider } from '../my-context';

const App = () => {
  return (
    <MyProvider value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, veritatis?">
      <HookSwitcher />
    </MyProvider>
  );
};

export default App;
