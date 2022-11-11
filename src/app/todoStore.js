import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const todoStore = (set) => ({
  todos: [],
  //   Add course
  addTodo: (todo) => {
    set((state) => ({
      todos: [...state.todos, todo],
    }));
  },
  //   Remove course
  removeTodo: (todoId) => {
    set((state) => ({
      todos: [...state.todos.filter((c) => c.id !== todoId)],
    }));
  },
  //duplicate course
  toggleTodo: (todoId) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
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
