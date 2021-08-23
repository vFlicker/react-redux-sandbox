import React from 'react';
import Counter from '../counter';
import './app.css';

const App = (props) => {
  return (
    <Counter { ...props } />
  );
}

export default App;
