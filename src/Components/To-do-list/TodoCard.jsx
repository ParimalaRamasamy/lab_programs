import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");


  const addTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };


  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>To-Do List</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span
              onClick={() => toggleComplete(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
