const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function getTasks() {
  try {
    const res = await fetch(`${API_URL}/api/tasks`);
    return res.json();
  } catch (err) {
    console.error(err);
  }
}

export async function addTask(title, status) {
  try {
    const res = await fetch(`${API_URL}/api/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, status: status || "pending" }),
    });
    return res.json();
  } catch (err) {
    console.error(err);
  }
}

export async function updateTask(id, updates) {
  try {
    const res = await fetch(`${API_URL}/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    return res.json();
  } catch (err) {
    console.error(err);
  }
}

export async function deleteTask(id) {
  try {
    const res = await fetch(`${API_URL}/api/tasks/${id}`, {
      method: "DELETE",
    });
    return res.json();
  } catch (err) {
    console.error(err);
  }
}
