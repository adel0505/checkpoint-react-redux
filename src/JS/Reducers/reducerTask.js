import {
  ADDTASK,
  EDITTASK,
  DELETETASK,
  FILTERTASK,
  DONETASK,
} from "../constants/actionsTypes";
import { taskData } from "../../components/TaskData";

const intialState = {
  taskList: taskData,
};

const reducerTask = (state = intialState, action) => {
  switch (action.type) {
    case ADDTASK:
      return { ...state, taskList: [...state.taskList, action.task] };
    case EDITTASK:
      return {
        ...state,
        taskList: state.taskList.map((el) =>
          el.id === action.payload.task.id
            ? {
                ...el,
                description: action.payload.description,
              }
            : el
        ),
      };
    case DELETETASK:
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.task.id),
      };
    case FILTERTASK:
      return {
        ...state,
        taskList: state.taskList.map((task) => task.id !== action.task.id),
      };
    case DONETASK:
      return {
        ...state,
        taskList: state.taskList.map((el) =>
          el.id === action.task.id
            ? {
                ...el,
                isDone: !el.isDone,
              }
            : el
        ),
      };
    default:
      return state;
  }
};

export default reducerTask;
