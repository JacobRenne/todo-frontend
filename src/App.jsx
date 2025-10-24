import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function App() {
  const [tasks, setTasks ] = useState([]);

  async function loadTasks() {
    const response = await fetch(`${API_URL}/api/tasks`);
    const data = await response.json();
    setTasks(data);
  }
  useEffect(() => { loadTasks() }, [])

  return (
    <>
     <main>
      <h1>TODO App</h1>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.title} - {t.status}
          </li>
        ))}
      </ul>
     </main>
    </>
  )
};

