import React, { useState, useEffect } from 'react';
import './counter.css';

const Counter = () => {
  const [value, setValue] = useState(0);
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
      <HookCounter value={value} />
    </>
    : <button className="btn btn-success" onClick={onShowButtonClick}>Show</button>;

  return (
    <div className="counter">
      <h2 className="mb-3">Counter</h2>
      {content}
    </div>
  )
}

const HookCounter = ({ value }) => {
  useEffect(() => {
    console.log('mount')
    return () => console.log('unmount');
  }, []);

  useEffect(() => {
    console.log('update')
  });

  return <p>{value}</p>;
}

export default Counter;
