// * router.get("/get-all-tasks", fetchID, getAllTasks);
// router.get("/get-completed", fetchID, getCompleted);
// router.get("/get-active", fetchID, getActive);
// * router.post("/add-new-task", fetchID, addNewTask);
// * router.put("/update-task/:id", fetchID, updateTask);
// * router.delete("/delete-task/:id", fetchID, deleteTask);
// * router.delete("/delete-all/", fetchID, deleteAll);
// Get All Tasks
const getAllTasks = async ({ setTasks }) => {
  try {
    const token = localStorage.getItem("token");
    let response = await fetch(
      "https://rohan-b-84-todo.herokuapp.com/api/task/get-all-tasks",
      {
        method: "GET",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    setTasks(data);
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async ({ ID }) => {
  try {
    const token = localStorage.getItem("token");
    let response = await fetch(
      `https://rohan-b-84-todo.herokuapp.com/api/task/delete-task/${ID}`,
      {
        method: "DELETE",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async ({ ID, input, setInput }) => {
  try {
    let data = {
      task: input,
    };

    let dataJSON = JSON.stringify(data);

    const token = localStorage.getItem("token");
    let response = await fetch(
      `https://rohan-b-84-todo.herokuapp.com/api/task/update-task/${ID}`,
      {
        method: "PUT",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
        },
        body: dataJSON,
      }
    );
    setInput("");
  } catch (error) {
    console.log(error);
  }
};

const deleteAll = async () => {
  try {
    const token = localStorage.getItem("token");
    let response = await fetch(
      `https://rohan-b-84-todo.herokuapp.com/api/task/delete-all/`,
      {
        method: "DELETE",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const addNewTask = async ({ input, setInput }) => {
  try {
    const token = localStorage.getItem("token");
    let data = {
      task: input,
    };

    let dataJSON = JSON.stringify(data);

    let response = await fetch(
      "https://rohan-b-84-todo.herokuapp.com/api/task/add-new-task",
      {
        method: "POST",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
        },
        body: dataJSON,
      }
    );

    setInput("");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllTasks, addNewTask, deleteTask, deleteAll, updateTask };
