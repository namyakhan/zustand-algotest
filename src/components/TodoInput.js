import React, { useState } from "react";
import useTodoStore from "../app/todoStore";
import { PlusIcon } from "@heroicons/react/24/outline";

const TodoInput = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

  const [todoTitle, setTodoTitle] = useState("");

  const handleTodoSubmit = () => {
    if (!todoTitle) return alert("Please add Course Title");

    addTodo({
      id: Math.ceil(Math.random() * 1000000),
      title: todoTitle,
    });

    setTodoTitle("");
  };

  return (
    <div className="input-container">
      <input
        value={todoTitle}
        onChange={(e) => {
          setTodoTitle(e.target.value);
        }}
        className="input"
      />

      <PlusIcon onClick={handleTodoSubmit} className="add-btn" />
    </div>
  );
};

export default TodoInput;
