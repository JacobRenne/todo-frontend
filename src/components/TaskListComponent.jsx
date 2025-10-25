import { useState } from "react";

export default function TaskList({ title, tasks, onUpdate, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editStatus, setEditStatus] = useState("pending");

  const statuses = ["pending", "in progress", "done"];

  return (
    <section>
      <h1 className="text-lg font-semibold mb-2 capitalize">{title}</h1>

      <table className="w-full border-collapse border border-gray-200 rounded-sm">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-300 text-left p-2">Title </th>
            <th className="border border-gray-300 text-left p-2 w-35">
              Status
            </th>
            <th className="border border-gray-300 text-left p-2 w-25">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="items-center">
              {editingId === task.id ? (
                <>
                  <td className="border border-gray-300 p-2">
                    <input
                      className="w-full p-1 border-2 border-blue-300 rounded focus:outline-none focus:border-blue-600"
                      placeholder="Enter task name"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <select
                      className="w-full p-1 border-2 border-blue-300 rounded focus:outline-none focus:border-blue-600"
                      value={editStatus}
                      onChange={(e) => setEditStatus(e.target.value)}
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                      onClick={() => {
                        onUpdate(task.id, {
                          title: editTitle,
                          status: editStatus,
                        });
                        setEditingId(null);
                      }}
                    >
                      Save
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="border border-gray-300 p-2">{task.title}</td>
                  <td className="border border-gray-300 p-2">{task.status}</td>
                  <td className="border border-gray-300 p-2">
                    <div className="flex gap-2 items-center">
                      <button
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                        onClick={() => {
                          setEditingId(task.id);
                          setEditTitle(task.title);
                          setEditStatus(task.status);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                        onClick={() => onDelete(task.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
