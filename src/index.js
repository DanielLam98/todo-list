import "./css/normalize.css";
import "./css/style.css";
import { newProjectMain } from "./newProjectForm";
import { generateTodoBtn } from "./todoItems";
import { displayTasks } from "./todoItems";

let todoItems = [];
const main = () => {
  newProjectMain();
  generateTodoBtn();
  getLocalStorage();
};

const setLocalStorage = () => {
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
};

const getLocalStorage = () => {
  if (localStorage.getItem("todoItems") !== null) {
    let getTodoItems = localStorage.getItem("todoItems");
    todoItems = JSON.parse(getTodoItems);
    displayTasks();
  }
};

main();

export { todoItems, setLocalStorage };
