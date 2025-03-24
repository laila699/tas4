import React, { useState } from "react";


interface AddTodoProps {
  addTodo: (text: string) => void;
  error: string | null; 
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo, error }) => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    addTodo(text); 
    setText(""); 
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new todo"
        style={{ borderColor: error ? "red" : "black" }} 
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {error && <p style={{ color: "red" }}>{error}</p>} { }
    </div>
  );
};

export default AddTodo;
