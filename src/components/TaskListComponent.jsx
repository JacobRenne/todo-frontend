import { useState } from "react";

export default function TaskList({ title, tasks, onUpdate, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editStatus, setEditStatus] = useState("pending");

  const statuses = ["pending", "in progress", "done"];

  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingId === task.id ? (
              <>
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => {
                    onUpdate(task.id, { title: editTitle, status: editStatus });
                    setEditingId(null);
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task.title}</span> - <span>{task.status}</span>
                <button
                  onClick={() => {
                    setEditingId(task.id);
                    setEditTitle(task.title);
                    setEditStatus(task.status);
                  }}
                >
                  Edit
                </button>
              </>
            )}
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
