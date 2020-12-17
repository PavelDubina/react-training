import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import "./todoList.css";

const TodoList = (props) => {
  return (
    <ul className="list">
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onChange}
          />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoList;
