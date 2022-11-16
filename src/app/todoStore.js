import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const todoStore = (set) => ({
  todos: [],

  addTodo: (todo) => {
    set((state) => ({
      todos: [...state.todos, todo],
    }));
  },

  removeTodo: (todoId) => {
    set((state) => ({
      todos: [...state.todos.filter((c) => c.id !== todoId)],
    }));
  },
});

const useTodoStore = create(
  devtools(
    persist(todoStore, {
      name: "todo",
    })
  )
);

export default useTodoStore;
