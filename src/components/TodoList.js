import React from "react";
import useTodoStore from "../app/todoStore";
import { TrashIcon } from "@heroicons/react/24/outline";

const TodoList = () => {
  const { todos, removeTodo, toggleTodo } = useTodoStore((state) => ({
    todos: state.todos,
    removeTodo: state.removeTodo,
    toggleTodo: state.toggletodoStatus,
  }));
  return (
    <>
      <ul>
        {todos.map((todo, i) => {
          return (
            <React.Fragment key={i}>
              <li
                className={`todo-item`}
                style={{
                  backgroundColor: todo.completed ? "#000000" : "white",
                }}
              >
                <span className="checkbox-input">
                  <input
                    checked={todo.completed}
                    type="checkbox"
                    onChange={(e) => {
                      toggleTodo(todo.id);
                    }}
                  />
                </span>
                <span>{todo?.title}</span>
               
                <TrashIcon
                  onClick={() => removeTodo(todo.id)}
                  className="delete-btn"
                />
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
