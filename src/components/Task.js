import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  const [complete, toggleComplete] = useState(props.isComplete);
  const onCompleted = (event) => {
    toggleComplete(!complete);
  };
  const buttonClass = complete ? 'tasks__item__toggle--completed' : '';
  return (
    <li key={props.id} className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={onCompleted}
      >
        {props.title}
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
