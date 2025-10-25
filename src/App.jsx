import { useState, useEffect } from "react";
import { getTasks, updateTask, deleteTask, addTask } from "./api";
import TaskForm from "./components/TaskFormComponent";
import TaskList from "./components/TaskListComponent";

export default function App() {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const data = await getTasks();
    setTasks(data);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function handleAdd(title, status) {
    await addTask(title, status);
    loadTasks();
  }

  async function handleUpdate(id, update) {
    await updateTask(id, update);
    loadTasks();
  }

  async function handleDelete(id) {
    await deleteTask(id);
    loadTasks();
  }

  const statuses = ["pending", "in progress", "done"];

  return (
    <>
      <main>
        <h1>TODO App</h1>

        <TaskForm onAdd={handleAdd} />

        {statuses.map((status) => (
          <TaskList
            key={status}
            title={status}
            tasks={tasks.filter((t) => t.status === status)}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </main>
    </>
  );
}
