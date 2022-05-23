import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
export default function TaskItem({ task, id, isComplete }) {
  const { deleteNote, setEdit, editNote, setEditValue, setEditID } =
    useContext(noteContext);
  const [complete, setComplete] = useState(isComplete);
  const toggleComplete = () => {
    if (complete == false) {
      setComplete(true);
      let note = {
        task,
        _id: id,
        isComplete: !complete,
      };
      editNote(note);
    } else {
      setComplete(false);
      let note = {
        task,
        _id: id,
        isComplete: !complete,
      };
      editNote(note);
    }
  };
  return (
    <div
      onClick={toggleComplete}
      id={id}
      className={complete ? "todo-item todo-item-complete" : "todo-item"}
    >
      <span className="icon icon-check"></span>
      <li>{task}</li>
      <span
        className="icon icon-edit"
        onClick={() => {
          setEdit(true);
          setEditValue(task);
          setEditID(id);
        }}
      ></span>
      <span
        className="icon icon-delete"
        onClick={() => {
          deleteNote(id);
        }}
      ></span>
    </div>
  );
}
