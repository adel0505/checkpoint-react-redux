import { React, useState } from "react";
import { useDispatch } from "react-redux";
//primereact
import { Card } from "primereact/card";
import { Button } from "primereact/button";
//actions
import { doneTask, deleteTask } from "../JS/Actions/actionTask";
//components
import { Edittask } from "./Edittask";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [displayBasic, setDisplayBasic] = useState(false);

  const onClick = () => {
    setDisplayBasic(true);
  };

  const footer = (
    <span>
      <Button
        label="Edit"
        icon="pi pi-pencil"
        className="p-button-info"
        style={{ marginRight: "5px" }}
        onClick={() => onClick()}
      />
      <Button
        label="Delete"
        icon="pi pi-trash"
        className="p-button-raised p-button-danger"
        onClick={() => dispatch(deleteTask(task))}
      />
    </span>
  );

  return (
    <div className="p-mr-2 p-mb-2">
      <Card
        footer={footer}
        title="Task"
        style={{ width: "25rem", marginBottom: "2em" }}
      >
        <span
          className="p-m-0"
          style={{
            lineHeight: "1.5",
            textDecoration: task.isDone ? "line-through" : "none",
          }}
          onClick={() => {
            dispatch(doneTask(task));
          }}
        >
          {task.description}
        </span>
      </Card>
      <Edittask
        task={task}
        displayBasic={displayBasic}
        setDisplayBasic={setDisplayBasic}
      />
    </div>
  );
};

export default Task;
