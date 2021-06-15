import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
// Css primereact
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
// Components
import { ListTask } from "./components/ListTask";
import { Header } from "./components/Header";

function App() {
  const taskList = useSelector((state) => state.reducerTask.taskList);
  const [filteredTask, setFilteredTask] = useState(taskList);
  const [isDone, setIsDone] = useState("ALL");

  /*useEffect(() => {
    setFilteredTask(taskList);
  }, [taskList]);*/
  return (
    <div className="App">
      <Header
        setFilteredTask={setFilteredTask}
        setIsDone={setIsDone}
        isDone={isDone}
      />
      <ListTask taskFilter={filteredTask} isDone={isDone} />
    </div>
  );
}

export default App;
