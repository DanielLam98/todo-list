import "./css/normalize.css";
import "./css/style.css";
import { newProjectMain } from "./newProjectForm";
import { generateTodoBtn } from "./todoItems";

const main = () => {
  newProjectMain();
  generateTodoBtn();
};

main();
