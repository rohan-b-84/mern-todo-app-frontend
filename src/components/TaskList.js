import React, { useState, useEffect, useContext } from "react";
import noteContext from "../context/notes/noteContext";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const context = useContext(noteContext);
  const { notes, getNotes, edit, deleteAll, deleteCompleted } = context;
  useEffect(() => {
    getNotes();
  }, []);
  const handleDeleteAll = () => {
    deleteAll();
  };
  const handleCompleted = () => {
    deleteCompleted();
  };
  return (
    <div className="todo-container">
      <TaskInput />

      {!edit &&
        notes.map(({ task, _id, isComplete }) => {
          return (
            <TaskItem task={task} id={_id} key={_id} isComplete={isComplete} />
          );
        })}

      <div className="controls">
        <span className="deleteAll" onClick={handleDeleteAll}>
          Clear All
        </span>
        <span className="deleteCompleted" onClick={handleCompleted}>
          Clear Completed
        </span>
      </div>
    </div>
  );
}
