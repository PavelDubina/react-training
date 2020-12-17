import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from '../context'

import "./todoItem.css";

const TodoItem = ({ todo, index, onChange }) => {

  const {removeTodo} = useContext(Context)
  return (
    <li className="element">
      <span className={todo.completed ? "completed" : ""}>
        <input
          className="input"
          type="checkbox"
          onChange={() => onChange(todo.id)}
          checked={todo.completed}
        />
        <strong>{index + 1}</strong>
        {todo.title}
      </span>
      <button onClick={removeTodo.bind(null, todo.id)}>&#10006;</button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default TodoItem;
