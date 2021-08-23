import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './counter.css';

const Counter = ({ counter, dec, inc, rnd }) => {
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

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
