import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const noteInital = [];
  const [notes, setNotes] = useState(noteInital);
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editComplete, setEditComplete] = useState();

  const getNotes = async () => {
    try {
      let token = localStorage.getItem("token");
      let response = await fetch(
        "https://rohan842-my-todo-app.herokuapp.com/api/task/get-all-tasks",
        {
          method: "GET",
          headers: {
            "auth-token": token,
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json();
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };
  // Add a note
  const addNote = async (note) => {
    try {
      let token = localStorage.getItem("token");

      let dataJSON = JSON.stringify(note);

      let response = await fetch(
        "https://rohan842-my-todo-app.herokuapp.com/api/task/add-new-task",
        {
          method: "POST",
          headers: {
            "auth-token": token,
            "Content-Type": "application/json",
          },
          body: dataJSON,
        }
      );
      let resJSON = await response.json();
      note._id = resJSON._id;
      console.log(note);

      setNotes(notes.concat(note));
    } catch (error) {
      console.log(error);
    }
  };

  // Delete a note
  const deleteNote = async (id) => {
    let newID = id;
    let newNotes = notes.filter((note) => {
      return note._id != id;
    });
    setNotes(newNotes);

    try {
      let token = localStorage.getItem("token");
      let url = `https://rohan842-my-todo-app.herokuapp.com/api/task/delete-task/${newID}`;
      let response = await fetch(url, {
        method: "DELETE",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  // Edit a note
  const editNote = async (note) => {
    try {
      let dataJSON = JSON.stringify(note);

      let token = localStorage.getItem("token");

      let response = await fetch(
        `https://rohan842-my-todo-app.herokuapp.com/api/task/update-task/${note._id}`,
        {
          method: "PUT",
          headers: {
            "auth-token": token,
            "Content-Type": "application/json",
          },
          body: dataJSON,
        }
      );
      let newNotes = notes.map((x) => {
        if (x._id == note._id) {
          return note;
        } else {
          return x;
        }
      });
      setNotes(newNotes);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteAll = async () => {
    try {
      const token = localStorage.getItem("token");
      await fetch(
        `https://rohan842-my-todo-app.herokuapp.com/api/task/delete-all/`,
        {
          method: "DELETE",
          headers: {
            "auth-token": token,
            "Content-Type": "application/json",
          },
        }
      );
      setNotes([]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCompleted = async () => {
    try {
      const token = localStorage.getItem("token");
      let response = await fetch(
        `https://rohan842-my-todo-app.herokuapp.com/api/task/delete-completed/`,
        {
          method: "DELETE",
          headers: {
            "auth-token": token,
            "Content-Type": "application/json",
          },
        }
      );
      let resJSON = await response.json();

      setNotes(resJSON);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <noteContext.Provider
      value={{
        notes,
        edit,
        setEdit,
        addNote,
        deleteNote,
        editNote,
        getNotes,
        setEditID,
        setEditValue,
        deleteAll,
        editValue,
        editID,
        editComplete,
        setEditComplete,
        deleteCompleted,
      }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
