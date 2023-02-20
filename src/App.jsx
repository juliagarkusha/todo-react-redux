// External deps
import React, { useEffect } from "react";

// Internal deps
import TodoList from "./components/common/TodoList";
import TodoForm from "./components/common/TodoForm";

// Local deps
import './App.scss';

function App() {
  useEffect(() => {
    document.title = 'todo-redux-server';
  }, []);

  return (
    <main className="app">
      <TodoForm />
      <TodoList />
    </main>
  );
}

export default App;
