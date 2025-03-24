import React from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  markAsCompleted: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, markAsCompleted, removeTodo }) => {
  return (
    <div>
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
