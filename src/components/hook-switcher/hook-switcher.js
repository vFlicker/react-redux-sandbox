import React, { useState, useContext } from 'react';
import './hook-switcher.css';
import MyContext from '../my-context';

const HookSwitcher = () => {
  const DEFAULT_SIZE = 20;

  const [ color, setColor ] = useState('light')
  const [ fontSize, setFontSize ] = useState(DEFAULT_SIZE);
  const text = useContext(MyContext);

  const onLightButtonClick = () => {
    setColor('light');
  };

  const onDarkButtonClick = () => {
    setColor('dark');
  };

  const onDefaultSizeButtonClick = () => {
    setFontSize((fontSize) => fontSize + 2);
  };

  const onPlusSizeButtonClick = () => {
    setFontSize(DEFAULT_SIZE);
  };

  return(
    <div
      className={`switcher switcher--${color}`}
      style={ { fontSize: `${fontSize}px` } }>
      <div className="switcher__buttons">
        <button
          className="btn btn-light switcher__button"
          onClick={onLightButtonClick}>
          Light
        </button>

        <button
          className="btn btn-dark switcher__button"
          onClick={onDarkButtonClick}>
          Dark
        </button>

        <button
          className="btn btn-warning switcher__button"
          onClick={onPlusSizeButtonClick}>
          Font size default
        </button>

        <button
          className="btn btn-warning switcher__button"
          onClick={onDefaultSizeButtonClick}>
          Font size +
        </button>
      </div>

      <p>{text}</p>
    </div>
  );
};

export default HookSwitcher;
