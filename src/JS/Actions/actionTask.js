import {
  ADDTASK,
  EDITTASK,
  DELETETASK,
  FILTERTASK,
  DONETASK,
} from "../constants/actionsTypes";
export const addTask = (task) => {
  return {
    type: ADDTASK,
    task,
  };
};
export const editTask = (payload) => {
  return {
    type: EDITTASK,
    payload,
  };
};
export const deleteTask = (task) => {
  return {
    type: DELETETASK,
    task,
  };
};
export const doneTask = (task) => {
  return {
    type: DONETASK,
    task,
  };
};
export const filterTask = (task) => {
  return {
    type: FILTERTASK,
    task,
  };
};
