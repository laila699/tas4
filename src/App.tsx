import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo"; 
import "./App.css"; 


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Master TypeScript", completed: false },
  ]);
  const [error, setError] = useState<string | null>(null);

  const markAsCompleted = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const addTodo = (text: string) => {
    if (text.trim() === "") {
      setError("Please enter a task.");
      return;
    }
    const newTodo: Todo = { id: todos.length + 1, text, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setError(null);
  };

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Todo List</h1>
        <AddTodo addTodo={addTodo} error={error} />
        <TodoList
          todos={todos}
          markAsCompleted={markAsCompleted}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
};

export default App;
