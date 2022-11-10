import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="main-container">
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        Today 🎯
      </h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
