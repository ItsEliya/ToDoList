import React from "react";

import "./NewTaskForm.css";
export default function NewTaskForm() {
  return (
    <div className="new-task-form-container">
      <input className="new-task-form-input" placeholder="New Task..." />
      <button className="new-task-form-btn">+</button>
    </div>
  )
}