import { todoItems } from ".";
import { editCurrentTask, createModal } from "./editTask";

//creates the todoItems
class todoItem {
  constructor(uniqueID, title, dueDate, priority, project, completed) {
    this.uniqueID = uniqueID;
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.completed = completed;
  }
}

//generates a new todo task button and adds it to the todo list.
const generateTodoBtn = () => {
  const todoBtn = document.createElement("div");
  //todoBtn.classList.add("newTodoBtn");
  const todoBtnText = document.createElement("h3");
  todoBtn.classList.add("newTaskBtn");
  todoBtnText.innerHTML = '<i class="fa-solid fa-plus"></i> New Task';
  todoBtn.append(todoBtnText);
  const todoList = document.querySelector(".todoList");
  todoList.appendChild(todoBtn);
  newTodoItem();
};

//adding event listener to the todo button to create form
const newTodoItem = () => {
  const newTodoBtn = document.querySelector(".newTaskBtn");
  newTodoBtn.addEventListener("click", generateForm, { once: true });
  function generateForm() {
    //removes the h3 in the "+ New Task" div
    newTodoBtn.removeChild(newTodoBtn.firstChild);
    const todoForm = document.createElement("form");
    todoForm.classList.add("newTodoForm");
    const newTodoTitle = document.createElement("input");
    newTodoTitle.setAttribute("type", "text");
    newTodoTitle.setAttribute("name", "todoTitle");
    newTodoTitle.setAttribute("placeholder", "Your Task");
    newTodoTitle.classList.add("newTodoTitle");
    const pickDate = document.createElement("input");
    pickDate.setAttribute("type", "date");
    pickDate.setAttribute("name", "pickDate");
    pickDate.classList.add("pickDate");
    const priorityInput = document.createElement("input");
    priorityInput.setAttribute("type", "checkbox");
    priorityInput.setAttribute("name", "priorityInput");
    priorityInput.setAttribute("id", "priority");
    const priorityInputLabel = document.createElement("label");
    priorityInputLabel.setAttribute("for", "priority");
    priorityInputLabel.innerHTML = "Priority?";
    const newTaskSubmitBtn = document.createElement("input");
    newTaskSubmitBtn.setAttribute("type", "button");
    newTaskSubmitBtn.setAttribute("value", "New Task");
    newTaskSubmitBtn.classList.add("newTaskSubmitBtn");
    todoForm.appendChild(newTodoTitle);
    todoForm.appendChild(pickDate);
    todoForm.appendChild(priorityInputLabel);
    todoForm.appendChild(priorityInput);
    todoForm.appendChild(newTaskSubmitBtn);
    newTodoBtn.appendChild(todoForm);
    newTask();
  }
};

const newTask = () => {
  const newTaskTitle = document.querySelector(".newTodoTitle");
  const newTaskDate = document.querySelector(".pickDate");
  const newTaskPriority = document.querySelector("#priority");
  const newTaskSubmitbtn = document.querySelector(".newTaskSubmitBtn");
  const currentProject = document
    .querySelector(".todoList")
    .querySelector("h2");
  const taskForm = document.querySelector(".newTodoForm");
  newTaskSubmitbtn.addEventListener("click", createTask);
  function createTask() {
    if (newTaskTitle.value != "" && newTaskDate.value != "") {
      const task = new todoItem(
        generateUniqueID(),
        newTaskTitle.value,
        newTaskDate.value,
        newTaskPriority.checked,
        currentProject.textContent,
        false
      );
      todoItems.push(task);
      taskForm.reset();
    }
    displayTasks();
  }
};

//add check for existing uniqueID already
function generateUniqueID() {
  let randomlyGeneratedNumber = Math.floor(Math.random() * Date.now());
  return Number(randomlyGeneratedNumber);
}

const displayTasks = () => {
  const currentProjectList = document.querySelector(".todoList");
  //removing all current tasks
  document.querySelectorAll(".currentProjectTasks").forEach((e) => e.remove());
  const currentProject = document
    .querySelector(".todoList")
    .querySelector("h2");
  //filters tasks based on the .todoList title
  let currentProjectTask = todoItems.filter((result) => {
    return result.project === currentProject.textContent;
  });
  console.log(currentProjectTask);
  //sorts tasks by oldest to newest
  currentProjectTask.sort(function (a, b) {
    return new Date(a.dueDate) - new Date(b.dueDate);
  });
  //loops through current projects
  for (let i = 0; i < currentProjectTask.length; i++) {
    //creates a div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("currentProjectTasks");
    taskDiv.setAttribute("id", currentProjectTask[i].uniqueID);
    //add title to div
    const taskDivTitle = document.createElement("h4");
    taskDivTitle.classList.add("taskTitle");
    taskDivTitle.textContent = currentProjectTask[i].title;
    taskDiv.appendChild(taskDivTitle);
    console.log(currentProjectTask[i]);
    //add date to div
    const taskDivDate = document.createElement("h5");
    taskDivDate.textContent = currentProjectTask[i].dueDate;
    taskDiv.appendChild(taskDivDate);
    if (currentProjectTask[i].priority) {
      taskDiv.classList.add("urgent");
    }
    const editTask = document.createElement("button");
    editTask.classList.add("editBtn");
    editTask.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    const deleteTask = document.createElement("button");
    deleteTask.innerHTML = `<i class="fa-solid fa-delete-left"></i>`;
    deleteTask.classList.add("deleteBtn");
    taskDiv.appendChild(editTask);
    taskDiv.appendChild(deleteTask);
    currentProjectList.appendChild(taskDiv);
  }
  //adds event listener to the edit button
  addEditBtnForm();
};

const addEditBtnForm = () => {
  const allEditBtns = document.querySelectorAll(".editBtn");
  allEditBtns.forEach((editBtn) => {
    editBtn.addEventListener("click", () => {
      createModal();
      editCurrentTask(editBtn.parentNode.id);
    });
  });
};

export { generateTodoBtn, displayTasks };
