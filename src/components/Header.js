import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
//primereact
import { Button } from "primereact/button";
//components
import { Addtask } from "./Addtask";

export const Header = ({ setFilteredTask, setIsDone, isDone }) => {
  const taskList = useSelector((state) => state.reducerTask.taskList);

  const [displayBasic, setDisplayBasic] = useState(false);

  const filterTask = () => {
    switch (isDone) {
      case "ALL":
        return setFilteredTask(taskList);
      case "isDone":
        return setFilteredTask(taskList.filter((task) => task.isDone === true));
      case "notDone":
        return setFilteredTask(
          taskList.filter((task) => task.isDone === false)
        );
      default:
        return taskList;
    }
  };
  useEffect(() => {
    filterTask();
  }, [isDone]);
  return (
    <div className="p-d-flex p-p-3 card">
      <Button
        type="button"
        icon="pi pi-align-justify"
        className="p-button-secondary"
        style={{ marginRight: "5px" }}
        onClick={(e) => setIsDone("ALL")}
      />
      <Button
        type="button"
        icon="pi pi-check"
        className="p-button-success"
        style={{ marginRight: "5px" }}
        onClick={(e) => setIsDone("isDone")}
      />
      <Button
        type="button"
        icon="pi pi-ban"
        className="p-button-warning"
        style={{ marginRight: "5px" }}
        onClick={(e) => setIsDone("notDone")}
      />
      <Button
        type="button"
        icon="pi pi-plus"
        className="p-ml-auto p-button-info"
        onClick={(e) => setDisplayBasic(true)}
      />
      <Addtask
        displayBasic={displayBasic}
        setDisplayBasic={setDisplayBasic}
        setFilteredTask={setFilteredTask}
      />
    </div>
  );
};
