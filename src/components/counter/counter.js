import React, { useState } from 'react';
import PlanetInfo from '../planet-info';
import './counter.css';

const Counter = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  const onCounterButtonClick = () => {
    setValue((value) => value + 1)
  };

  const onHideButtonClick = () => {
    setVisible(false);
  };

  const onShowButtonClick = () => {
    setVisible(true);
  };

  const content = visible
    ? <>
      <button className="btn btn-success mr-2" onClick={onCounterButtonClick}>+</button>
      <button className="btn btn-danger" onClick={onHideButtonClick}>Hide</button>
      <PlanetInfo id={value} />
    </>
    : <button className="btn btn-success" onClick={onShowButtonClick}>Show</button>;

  return (
    <div className="counter">
      <h2 className="mb-3">Counter</h2>
      {content}
    </div>
  )
}

export default Counter;
