import React, { createContext, useContext, useState } from "react";


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}


interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  markAsCompleted: (id: number) => void;
  removeTodo: (id: number) => void;
  sortTodos: (sortBy: "completed" | "text") => void; 
  error: string | null;
  setError: (error: string | null) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodoStore = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoStore must be used within a TodoProvider");
  }
  return context;
};

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Master TypeScript", completed: false },
  ]);

  const [error, setError] = useState<string | null>(null);

 
  const addTodo = (text: string) => {
    if (text.trim() === "") {
      setError("Please enter a task."); 
      return;
    }
    setTodos((prev) => [
      ...prev,
      { id: prev.length + 1, text, completed: false },
    ]);
    setError(null); 
  };

  
  const markAsCompleted = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

 
  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };


  const sortTodos = (sortBy: "completed" | "text") => {
    const sortedTodos = [...todos].sort((a, b) => {
      if (sortBy === "completed") {
        return a.completed === b.completed ? 0 : a.completed ? -1 : 1;
      } else if (sortBy === "text") {
        return a.text.localeCompare(b.text);
      }
      return 0;
    });
    setTodos(sortedTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        markAsCompleted,
        removeTodo,
        sortTodos,
        error,
        setError,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
