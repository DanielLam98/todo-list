import { todoItems } from ".";
import { displayTasks } from "./todoItems";

export const editCurrentTask = (currentTaskID) => {
  const currentTask = todoItems.find((e) => e.uniqueID == currentTaskID);
  const indexCurrentTask = todoItems.indexOf(currentTask);
  createModalForm(
    currentTask.title,
    currentTask.dueDate,
    currentTask.priority,
    indexCurrentTask
  );
};

function createModal() {
  //create overlay

  //create modal
  const modal = document.createElement("div");
  modal.classList.add("modal");
  //create modal header section
  const modalHeaderSection = document.createElement("div");
  modalHeaderSection.classList.add("modalHeader");
  //create modal header content
  const modalHeader = document.createElement("h2");
  modalHeader.textContent = "Edit Task";
  modalHeaderSection.append(modalHeader);
  //create close button
  const modalHeaderCloseBtn = document.createElement("button");
  modalHeaderCloseBtn.innerHTML = `&times;`;
  modalHeaderSection.appendChild(modalHeaderCloseBtn);
  modal.append(modalHeaderSection);
  modalHeaderCloseBtn.addEventListener("click", () => closeModal());
  document.querySelector("body").append(modal);
}

const createModalForm = (
  taskTitle,
  taskDate,
  taskPriority,
  projectTaskIndex
) => {
  const modal = document.querySelector(".modal");
  //create section for form
  const modalBodySection = document.createElement("div");
  modalBodySection.classList.add("modalBody");
  const modalForm = document.createElement("form");
  //let labelArr = [taskTitle, taskDate, taskPriority];
  let labelArr = ["taskTitle", "taskDate", "taskPriority"];
  let labelTextCotent = ["Task Title", "Date", "Priority"];
  let inputType = ["text", "date", "checkbox"];
  //let inputName = [taskTitle, taskDate, taskPriority];
  let inputName = ["taskTitle", "taskDate", "taskPriority"];
  let inputValue = [taskTitle, taskDate, taskPriority];
  for (let i = 0; i < labelArr.length; i++) {
    //generate div for each input
    const inputDiv = document.createElement("div");
    //generate Edit task title input
    const label = document.createElement("label");
    label.setAttribute("for", labelArr[i]);
    label.textContent = labelTextCotent[i];
    inputDiv.append(label);
    const taskInput = document.createElement("input");
    taskInput.setAttribute("type", inputType[i]);
    taskInput.setAttribute("name", inputName[i]);
    taskInput.setAttribute("value", inputValue[i]);
    if (inputValue[i] == true) {
      taskInput.checked = true;
    }
    inputDiv.appendChild(taskInput);
    modalForm.append(inputDiv);
  }
  const editFormBtn = document.createElement("button");
  editFormBtn.textContent = "Edit Task";
  modalForm.append(editFormBtn);
  editFormBtn.addEventListener("click", (e) => editTask(e));

  //append to modal
  modalBodySection.appendChild(modalForm);
  modal.appendChild(modalBodySection);
  setOverlay();
  const editTask = (e) => {
    e.preventDefault();
    const editTaskInputs = document
      .querySelector(".modal")
      .querySelectorAll("input");
    todoItems[projectTaskIndex].title = editTaskInputs[0].value;
    todoItems[projectTaskIndex].dueDate = editTaskInputs[1].value;
    todoItems[projectTaskIndex].priority = editTaskInputs[2].checked == 1;
    closeModal();
    displayTasks();
  };
};

const setOverlay = () => {
  const overlay = document.createElement("div");
  overlay.setAttribute("id", "overlay");
  document.querySelector("body").append(overlay);
};

const closeModal = () => {
  removeOverlay();
  removeModal();
};

//removes the overlay on the behind the modal
const removeOverlay = () => {
  const overlay = document.querySelector("#overlay");
  overlay.remove();
};

const removeModal = () => {
  const modal = document.querySelector(".modal");
  modal.remove();
};

export { createModal };
