import React, { useState, useContext } from "react";
import noteContext from "../context/notes/noteContext";

export default function TaskInput() {
  const context = useContext(noteContext);
  const {
    edit,
    setEdit,
    addNote,
    editNote,
    editValue,
    setEditValue,
    editID,
    setEditID,
  } = context;

  const [input, setInput] = useState("");
  const handleChange = (e) => {
    if (edit) {
      setEditValue(e.target.value);
    } else {
      setInput(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      let note = {
        task: editValue,
        _id: editID,
      };
      editNote(note);
      setEdit(false);
      setEditValue("");
      setEditID("");
    } else {
      let note = {
        task: input,
        isComplete: false,
      };
      addNote(note);
      setInput("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={edit ? "edit-input" : "add-input"}
          type="text"
          name="task"
          value={edit ? editValue : input}
          placeholder={edit ? "Edit Task" : "Add a new Task"}
          onChange={handleChange}
        />
        <button className="submit-form-btn">
          {edit ? "Update Task" : "Add Task"}
        </button>
        {edit && (
          <button
            onClick={() => {
              setEdit(false);
            }}
            style={{ marginLeft: "1rem" }}
          >
            Cancel
          </button>
        )}
      </form>
    </>
  );
}
