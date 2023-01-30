import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete }) => {
  const [complete, toggleComplete] = useState(isComplete);
  const onCompleted = (event) => {
    toggleComplete(!complete);
  };
  const buttonClass = complete ? '--completed' : '';
  return (
    <li key={id} className="tasks__item">
      <button
        className={`tasks__item__toggle${buttonClass}`}
        onClick={onCompleted}
      >
        {title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Task;
