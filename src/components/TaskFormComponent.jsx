import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("pending");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, status);
    setTitle("");
    setStatus("pending");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2 flex-wrap">
      <input
        className="flex grow shrink p-2 border-2 border-gray-300 max-w-100 rounded focus:outline-none focus:border-blue-400"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task..."
      />
      <select 
      className="flex-1 p-2 border-2 border-gray-300 max-w-50 rounded focus:outline-none focus:border-blue-400"

      value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="in progress">In progress</option>
        <option value="done">Done</option>
      </select>
      <button type="submit"
      className="p-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium"
      >Add Task</button>
    </form>
  );
}
