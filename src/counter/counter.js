import React from 'react';
import './counter.css';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="counter jumbotron">
      <h2>{ counter }</h2>
      <button
        className="btn btn-primary btn-lg"
        onClick={dec}>
        DEC
      </button>
      <button
        className="btn btn-primary btn-lg"
        onClick={inc}>
        INC
      </button>
      <button
        className="btn btn-primary btn-lg"
        onClick={rnd}>
        RND
      </button>
    </div>
  );
};

export default Counter;
