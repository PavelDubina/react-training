import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import "./App.css";

const App = () => {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Купить пиво" },
    { id: 2, completed: false, title: "Купить шаурму" },
    { id: 3, completed: false, title: "Купить пиццу" },
  ]);

  const onChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="container">
        <h1>React tutorial</h1>
        {todos.length?<TodoList todos={todos} onChange={onChange} />:<p>No todo</p>}
      </div>
    </Context.Provider>
  );
};

export default App;
