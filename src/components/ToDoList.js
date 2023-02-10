import React from "react";
import NewTaskForm from "./NewTaskForm";

import './ToDoList.css';

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export default function ToDoList(props) {
  //Get the current date.
  const today = new Date();
  const day = today.getDay();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  dd = dd < 10 ? "0" + dd : dd;
  mm = mm < 10 ? "0" + mm : mm;
  const formattedDate = DAYS[day] + ", " + dd + "/" + mm + "/" + yyyy;


  return (
    <div className="to-do-list-container">
      <p className="date">{formattedDate}</p>
      <h1 className="title">To-Do List</h1>
      <NewTaskForm />
    </div>
  )
}