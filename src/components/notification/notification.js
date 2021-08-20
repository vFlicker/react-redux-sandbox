import React, { useState, useEffect } from 'react';
import './notification.css';

const Notification = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timoutId = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timoutId);
  }, []);

  return visible && <p>Notification text</p>;
};

export default Notification;
