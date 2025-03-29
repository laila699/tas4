import React from "react";
import { useTodoStore } from "../newStore/todoStore"; 

const TodoList: React.FC = () => {
  const { todos, markAsCompleted, removeTodo, sortTodos } = useTodoStore(); 

  return (
    <div>
      { }
      <button onClick={() => sortTodos("completed")}>Sort by Completed</button>

      { }
      {todos.map((todo) => (
        <div key={todo.id} style={{ marginBottom: "10px" }}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "gray" : "black",
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => markAsCompleted(todo.id)}>
            {todo.completed ? "Completed" : "Mark as Completed"}
          </button>
          <button onClick={() => removeTodo(todo.id)} style={{ marginLeft: "10px" }}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
