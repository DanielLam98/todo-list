import "./css/normalize.css";
import "./css/style.css";
import { newProjectMain } from "./newProjectForm";
import { generateTodoBtn } from "./todoItems";

export let todoItems = [];
const main = () => {
  newProjectMain();
  generateTodoBtn();
};

main();
