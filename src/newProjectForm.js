let projects = ["inbox", "today", "week"];
const newProjectMain = () => {
  newProjectForm();
  openDefaultProjects();
};

const newProjectForm = () => {
  const newProjectButton = document.querySelector("#newProject");
  newProjectButton.addEventListener("click", () => {
    //hiding the newProject button
    newProjectButton.style.display = "none";
    //dynamically creating the new Project form
    const newProjectSection = document.createElement("div");
    newProjectSection.classList.add("newProjectForm");
    const newProjectForm = document.createElement("form");
    newProjectForm.setAttribute("method", "post");
    let newProjectInput = document.createElement("input");
    newProjectInput.setAttribute("type", "text");
    newProjectInput.setAttribute("name", "projectName");
    newProjectInput.setAttribute("placeholder", "Project A");
    newProjectInput.classList.add("projectInput");
    let submitButton = document.createElement("input");
    submitButton.setAttribute("type", "button");
    submitButton.setAttribute("value", "Submit");
    submitButton.classList.add("createProjectBtn");
    let cancelButton = document.createElement("input");
    cancelButton.setAttribute("type", "button");
    cancelButton.setAttribute("value", "Cancel");
    cancelButton.classList.add("cancelProjectBtn");
    newProjectForm.appendChild(newProjectInput);
    newProjectForm.appendChild(submitButton);
    newProjectForm.appendChild(cancelButton);
    newProjectSection.appendChild(newProjectForm);
    const nav = document.querySelector("nav section");
    //displays form to screen
    nav.appendChild(newProjectSection);
    newProject();
  });
};

//newProject grabs the values and adds them to an array
const newProject = () => {
  const projectName = document.querySelector(".projectInput");
  const submitProject = document.querySelector(".createProjectBtn");
  const newProjectForm = document.querySelector("form");
  submitProject.addEventListener("click", addProject);
  newProjectForm.onsubmit = function (e) {
    e.preventDefault();
    addProject();
  };
  function addProject() {
    //checks if project is existing already
    if (
      projectName.value != "" &&
      projects.indexOf(projectName.value.toLowerCase()) == -1
    ) {
      projects.push(projectName.value);
      const projectDiv = document.createElement("div");
      const projectValue = document.createElement("h2");
      const projectList = document.querySelector(".projectList");
      projectValue.textContent = projectName.value;
      projectDiv.appendChild(projectValue);
      projectList.appendChild(projectDiv);
      document.querySelector(".newProjectForm").remove();
      document.querySelector("#newProject").style.display = "block";

      openProject();
    } else {
      alert("enter something or its included already");
    }
    console.log(projects);
  }
};

function openDefaultProjects() {
  const defaultProjects = document
    .querySelector(".defaultProjects")
    .querySelectorAll("button");
  defaultProjects.forEach((defaultProject) => {
    defaultProject.addEventListener("click", () =>
      changeDefaultProjectTitle(defaultProject)
    );
  });
}

function openProject() {
  const projectList = document
    .querySelector(".projectList")
    .querySelectorAll("div");

  projectList.forEach((project) => {
    project.addEventListener("click", () => changeProjectTitle(project));
  });
}

function changeProjectTitle(project) {
  const projectTitle = project.querySelector("h2").textContent;
  const changeName = document.querySelector(".todoList").querySelector("h2");
  changeName.textContent = projectTitle;
}

function changeDefaultProjectTitle(project) {
  const changeName = document.querySelector(".todoList").querySelector("h2");
  changeName.textContent = project.textContent;
}
export { newProjectMain };
