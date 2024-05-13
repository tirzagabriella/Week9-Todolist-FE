import axios from "axios";

axios.defaults.withCredentials = true

export const getTasks = async (user) => {
  try {
    const uid = user.uid;
    return axios.get(`https://sample-a6tfftdg5a-as.a.run.app/todos/all/${uid}`, {withCredentials: true})
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const addTask = async (task, datetime, uid) => {
  try {
    const newTodo = {
      id: crypto.randomUUID(), // Generate a UUID for the new todo item
      task,
      datetime,
      user_id: uid,
    };

    axios.post("https://sample-a6tfftdg5a-as.a.run.app/todos/create", newTodo).catch((error) => {
      console.error("There was an error adding the todo: ", error);
    });
  } catch (error) {
    console.log("Error adding task : ", error);
  }
};

export const editTask = async (taskId, title, completed) => {
  try {
    const payload = {
      id: taskId,
      task: title,
      completed: completed
    }

    axios
      .put(`https://sample-a6tfftdg5a-as.a.run.app/todos/edit/${taskId}`, payload)
      .catch((error) => {
        console.error("There was an error updating the todo: ", error);
      });
  } catch (error) {
    console.log("Error updating data : ", error);
  }
};

export const deleteTask = async (taskId) => {
  try {
    axios
      .delete(`https://sample-a6tfftdg5a-as.a.run.app/todos/delete/${taskId}`)
      .catch((error) => {
        console.error("There was an error updating the todo: ", error);
      });
  } catch (error) {
    console.log("Error deleting task : ", error)
  }
};

export const createSession = async (name) => {
  try {
    return axios.post(`https://sample-a6tfftdg5a-as.a.run.app/create_session/${name}`)
    .catch((error) => {
      console.error("There was an error creating the session: ", error);
    });
  } catch (error) {
    console.log("Error adding task : ", error);
  }
};

export const checkSession = async () => {
  try {
    return axios.get(`https://sample-a6tfftdg5a-as.a.run.app/whoami`)
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const deleteSession = async () => {
  try {
    axios.post("https://sample-a6tfftdg5a-as.a.run.app/delete_session").catch((error) => {
      console.error("There was an error deleting the session: ", error);
    });
  } catch (error) {
    console.log("Error adding task : ", error);
  }
};