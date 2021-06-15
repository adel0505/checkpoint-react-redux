import { React, useState } from "react";
import { useDispatch } from "react-redux";
//primereact
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
//Css
import "./Edittask.css";
//actions
import { editTask } from "../JS/Actions/actionTask";

export const Edittask = ({ task, displayBasic, setDisplayBasic }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState(task.description);

  const onHide = () => {
    setDisplayBasic(false);
    setDescription(null);
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
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={() => {
            dispatch(editTask({ task, description }));
            onHide();
          }}
          autoFocus
        />
      </div>
    );
  };

  return (
    <Dialog
      header="Edit Task"
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
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <small id="username1-help" className="p-d-block">
          Edit description Task.
        </small>
      </div>
    </Dialog>
  );
};
