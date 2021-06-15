import React from "react";
import { useSelector } from "react-redux";

import "primeflex/primeflex.css";

import "./ListTask.css";
import Task from "./Task";

export const ListTask = ({ taskFilter, isDone }) => {
  const taskList = useSelector((state) => state.reducerTask.taskList);
  return isDone === "isDone" || isDone === "notDone" ? (
    <div className="p-d-flex  p-flex-wrap">
      {taskFilter.map((task, i) => (
        <Task task={task} key={i} />
      ))}
    </div>
  ) : (
    <div className="p-d-flex  p-flex-wrap">
      {taskList.map((task, i) => (
        <Task task={task} key={i} />
      ))}
    </div>
  );
};
