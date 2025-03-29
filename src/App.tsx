import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { TodoProvider } from "./newStore/todoStore";
import { ThemeProvider, useThemeStore } from "./newStore/themeStore";
import "./App.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <TodoProvider>
        <MainApp />
      </TodoProvider>
    </ThemeProvider>
  );
};

const MainApp: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className={`container ${theme}`}>
      <div className="card">
        <h1 className="title">Todo List</h1>
        <AddTodo />
        <TodoList />
        
        { }
        <button onClick={toggleTheme} className="theme-button">
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
};

export default App; 
 


 