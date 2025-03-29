import React, { useState } from "react";
import { useTodoStore } from "../newStore/todoStore"; 

const AddTodo: React.FC = () => {
  const { addTodo } = useTodoStore(); 
  const [text, setText] = useState("");
  const [error, setError] = useState<string>("");

  const handleAddTodo = () => {
    if (text.trim() === "") {
      setError("Please enter a task."); 
    } else {
      addTodo(text); 
      setText(""); 
      setError(""); 
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter new todo" 
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {error && <p style={{ color: "red" }}>{error}</p>} { }
    </div>
  );
};

export default AddTodo;
