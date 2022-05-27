import React, { useState, useEffect } from "react";
import "./App.css";

// Importing Components
import Form from "./components/Form";
import TodoList from "./components/Todo-List";

function App() {
  //UseState
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run once when the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  //UseEffect
  useEffect(() => {
    filterHandler();
    saveLocalStorage();
  }, [todos, status]);

  // Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //Save Local Todo
  const saveLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = localStorage.getItem("todos", JSON.stringify(todos));
      console.log(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Ervis Todo List </h1>
      </header>
      <Form
        inputText={inputText}
        Todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        onChange={filterHandler}
        setTodos={setTodos}
        Todos={todos}
      />
    </div>
  );
}

export default App;
