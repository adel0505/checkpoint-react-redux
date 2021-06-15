import { React, useState } from "react";
import { useDispatch } from "react-redux";
//primereact
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
//Css
import "./Edittask.css";
//actions
import { addTask } from "../JS/Actions/actionTask";

export const Addtask = ({ displayBasic, setDisplayBasic }) => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState("...");
  const onHide = () => {
    setDisplayBasic(false);
    setDescription(null);
  };
  const save = (e) => {
    e.preventDefault();
    const newTodo = {
      description: description,
      id: Math.random(),
      isDone: false,
    };

    dispatch(addTask(newTodo));
    onHide();
  };
  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={() => onHide()}
          className="p-button-text"
        />
        <Button label="Yes" icon="pi pi-check" onClick={save} autoFocus />
      </div>
    );
  };

  return (
    <Dialog
      header="Add new Task"
      visible={displayBasic}
      style={{ width: "50vw" }}
      footer={renderFooter("displayBasic")}
    >
      <div className="p-field">
        <label htmlFor="username1" className="p-d-block">
          Description
        </label>
        <InputText
          id="username1"
          aria-describedby="username1-help"
          className="p-d-block"
          onChange={(e) => {
            e.preventDefault();
            setDescription(e.target.value);
          }}
          value={description}
        />
        <small id="username1-help" className="p-d-block">
          add description Task.
        </small>
      </div>
    </Dialog>
  );
};
