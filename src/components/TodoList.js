import React, { useState } from "react";
import useTodoStore from "../app/todoStore";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import MomentumAndTrail from "./MomentumAndTrail";

const TodoList = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

  const [leg, setLeg] = useState("");
  const [position, setPosition] = useState("");
  const { todos, removeTodo } = useTodoStore((state) => ({
    todos: state.todos,
    removeTodo: state.removeTodo,
  }));

  const handleTodoSubmit = () => {
    addTodo({
      id: Math.ceil(Math.random() * 1000000),
      leg: leg,
      position: position,
    });

    setLeg("");
    setPosition("");
  };

  return (
    <div className="flex flex-col items-center">
      {todos.map((todo, i) => {
        return (
          <div
            key={i}
            className="bg-grey p-5 mt-10 rounded-md w-[1000px] h-[250px]"
          >
            <div className="flow-root">
              <div className="flex flex-col items-end space-y-2">
                <XCircleIcon
                  onClick={() => removeTodo(todo.id)}
                  className="float-right text-red-400 h-5 w-5"
                />
                <DocumentDuplicateIcon
                  onClick={handleTodoSubmit}
                  className="float-right text-gray-400 h-5 w-5"
                />
              </div>

              <div className="flex flex-row items-center justify-center space-x-2">
                <h3>Lots:</h3>
                <input
                  min="1"
                  value={todo?.leg}
                  className="p-2 w-[100px] h-[30px] bg-white border border-gray-300 text-charcoal text-sm rounded-full"
                  placeholder="1"
                />
                <select
                  value={todo?.position}
                  id="position"
                  className="p-1 w-[100px] h-[30px] bg-blue border border-gray-300 text-white text-[16px] font-[400] rounded-full focus:ring-blue-500 focus:border-blue-500 block"
                >
                  <option value="Sell">Sell</option>
                  <option value="Buy">Buy</option>
                </select>
              </div>
            </div>
            <MomentumAndTrail />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
