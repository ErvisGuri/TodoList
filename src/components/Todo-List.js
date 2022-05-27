import React from "react";

//Import Component
import Todo from "./Todo";

const TodoList = ({ Todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            Todos={Todos}
            setTodos={setTodos}
            text={todo.text}
            todo={todo}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
