import TaskList from "../components/TaskList";
import React from "react";

export default function TodoPage() {
  return (
    <main className="todo-page">
      <div className="todo-app">
        <div className="todo-header">
          <h1>TODO</h1>
        </div>
        <>
          <TaskList></TaskList>
        </>
      </div>
    </main>
  );
}
