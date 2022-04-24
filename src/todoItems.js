class todoItems {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const generateTodoBtn = () => {
  const todoBtn = document.createElement("div");
  const todoBtnText = document.createElement("h3");
  todoBtn.classList.add("newTaskBtn");
  todoBtnText.innerHTML = '<i class="fa-solid fa-plus"></i> New Task';
  todoBtn.append(todoBtnText);
  const todoList = document.querySelector(".todoList");
  todoList.appendChild(todoBtn);
};

const newTodoItem = () => {};

const projectPage = () => {};

export { generateTodoBtn };
