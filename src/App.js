import "./index.css";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="main-container ">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
