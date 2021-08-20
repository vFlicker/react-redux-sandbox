import React, { Component, useState, useEffect } from 'react';
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
      <ClassCounter value={value} />
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

class ClassCounter extends Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentDidUpdate');
  }

  render() {
    return <p>{this.props.value}</p>;
  }
}

const HookCounter = ({ value }) => {
  useEffect(() => {
    console.log('update')

    return () => console.log('clear');
  }, [ value ]);

  return <p>{value}</p>;
}

export default Counter;
