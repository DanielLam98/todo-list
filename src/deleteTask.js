import { todoItems } from ".";
import { displayTasks } from "./todoItems";

export const deleteCurrentTask = (taskID) => {
  const currentTask = todoItems.find((e) => e.uniqueID == taskID);
  const indexCurrentTask = todoItems.indexOf(currentTask);
  todoItems.splice(indexCurrentTask, 1);
  displayTasks();
};
