import checkListImage from "../src/image/check-list.png";
import todayImage from "../src/image/tasks.png";
import weekImage from "../src/image/week2.png";
import starImage from "../src/image/star.png";

// const dropdownDivs = document.querySelectorAll(".dropdown > .Home > div");
// let taskContainerDiv;

// dropdownDivs.forEach((dropdownDiv) => {
//   dropdownDiv.addEventListener("click", () => {
//     dropdownDivs.forEach((d) => {
//       if (d.classList.contains("selected")) {
//         console.log("Removed from", d);
//         d.classList.remove("selected");
//       }
//     });

//     taskContainerDiv
//       .querySelectorAll(".task")
//       .forEach((taskDiv) => taskDiv.classList.add("selected"));

//     console.log("Added to", dropdownDiv);
//     dropdownDiv.classList.add("selected");
//   });
// });

// taskContainerDiv.addEventListener("click", (event) => {
//   const clickedElement = event.target;

//   if (clickedElement.classList.contains("task")) {
//     taskContainerDiv.querySelectorAll(".task").forEach((task) => {
//       task.classList.remove("selected");
//     });

//     clickedElement.classList.add("selected");

//     dropdownDivs.forEach((dropdownDiv) => {
//       dropdownDiv.classList.remove("selected");
//     });
//   }
// });

export default function createDropdownStructure() {
  const contentBodyDiv = document.createElement("div");
  contentBodyDiv.classList.add("contentbody");

  const dropdownDiv = document.createElement("div");
  dropdownDiv.classList.add("dropdown");
 
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("Home");

  const homeHeading = document.createElement("h2");
  homeHeading.textContent = "Home";

  const allTasksDiv = createDropdownItem(
    "All Tasks",
    checkListImage,
    "All Tasks"
  );
  const todayTasksDiv = createDropdownItem("Today", todayImage, "Today");
  const next7DaysDiv = createDropdownItem(
    "Next 7 days",
    weekImage,
    "Next 7 days"
  );
  const importantDiv = createDropdownItem("Important", starImage, "Important");

  homeDiv.appendChild(homeHeading);
  homeDiv.appendChild(allTasksDiv);
  homeDiv.appendChild(todayTasksDiv);
  homeDiv.appendChild(next7DaysDiv);
  homeDiv.appendChild(importantDiv);

  const projectsDiv = document.createElement("div");
  projectsDiv.classList.add("projects");

  const projectsHeading = document.createElement("h2");
  projectsHeading.textContent = "Projects";

  const taskContainerDiv = document.createElement("div");
  taskContainerDiv.classList.add("taskcontainer");

  const projectInfoDiv = document.createElement("div");
  projectInfoDiv.classList.add("projectinfo");
  projectInfoDiv.appendChild(createProjectInfoDiv());
  projectInfoDiv.appendChild(createButtons(projectInfoDiv));

  const addProjectDiv = document.createElement("div");
  addProjectDiv.style.display = "flex";
  addProjectDiv.style.alignItems = "center";
  addProjectDiv.classList.add("addproject");
  addProjectDiv.addEventListener("click", () => {
    projectInfoDiv.style.display = "flex";
  });

  const addProjectIcon = document.createElement("span");
  addProjectIcon.style.width = "25px";
  addProjectIcon.classList.add("material-icons-round");
  addProjectIcon.textContent = "add_circle_outlined";

  const addProjectText = document.createElement("span");
  addProjectText.textContent = "Add a Project";

  addProjectDiv.appendChild(addProjectIcon);
  addProjectDiv.appendChild(addProjectText);

  projectsDiv.appendChild(projectsHeading);
  projectsDiv.appendChild(taskContainerDiv);
  projectsDiv.appendChild(projectInfoDiv);
  projectsDiv.appendChild(addProjectDiv);

  dropdownDiv.appendChild(homeDiv);
  dropdownDiv.appendChild(projectsDiv);

  contentBodyDiv.appendChild(dropdownDiv);

  return {
    contentBodyDiv,
    dropdownDiv,
  };
 
}

function createDropdownItem(value, imageUrl, text) {
  const itemDiv = document.createElement("div");
  const className = value.toLowerCase().replace(/\s+/g, "-");
  itemDiv.classList.add(className);
  itemDiv.value = value;

  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = "";

  const heading = document.createElement("h3");
  heading.textContent = text;

  itemDiv.appendChild(image);
  itemDiv.appendChild(heading);

  return itemDiv;
}
function createProjectInfoDiv() {
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("InfoDiv");
  infoDiv.style.display = "flex";
  infoDiv.style.alignItems = "center";

  const menuIconDiv = document.createElement("div");
  menuIconDiv.classList.add("material-icons-round");
  menuIconDiv.textContent = "menu";

  const inputProjectTitle = document.createElement("input");
  inputProjectTitle.classList.add("projectitle");
  inputProjectTitle.setAttribute("required", true);
  inputProjectTitle.setAttribute("type", "text");
  inputProjectTitle.setAttribute("placeholder", "Enter your project");

  infoDiv.appendChild(menuIconDiv);
  infoDiv.appendChild(inputProjectTitle);

  return infoDiv;
}

function createButtons(projectInfoDiv) {
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttons");

  const addButton = document.createElement("input");
  addButton.setAttribute("type", "button");
  addButton.classList.add("addbtn");
  addButton.value = "Add";
  addButton.addEventListener("click", () => {
    createTask(projectInfoDiv); 
  });

  const cancelButton = document.createElement("input");
  cancelButton.setAttribute("type", "button");
  cancelButton.classList.add("cancelbtn");
  cancelButton.value = "Cancel";

  cancelButton.addEventListener("click", () => {
    projectInfoDiv.style.display = "none";
  });

  buttonsDiv.appendChild(addButton);
  buttonsDiv.appendChild(cancelButton);

  return buttonsDiv;
}
function createTask(projectInfoDiv) {

  const inputProjectTitle = document.querySelector(".projectitle");
  const value = inputProjectTitle.value;

  if (value === "") {
    alert("Please enter a project title.");
    return;
  }
  const task = document.createElement("div");
  task.classList.add("task");
  
  const parent = document.createElement("div");
  parent.classList.add("parent");
  parent.style.display ="flex"
  parent.style.alignItems ="center"

  const menubtn = document.createElement("div");
  menubtn.classList.add("material-icons-round");
  menubtn.textContent = "menu";

  const projectTitle = document.createElement("div");
  projectTitle.classList.add("title");
  projectTitle.textContent = value;

  const threedots = document.createElement("div");
  threedots.classList.add("material-icons-round", "threedots");
  threedots.textContent = "close";

  threedots.addEventListener("click", removeProject);

  function removeProject(event) {
    const taskToRemove = event.currentTarget.closest(".task");
    if (taskToRemove) {
      taskToRemove.remove();
    }
  }
  parent.appendChild(menubtn);
  parent.appendChild(projectTitle);

  task.appendChild(parent);
  task.appendChild(threedots);

  const taskContainer = document.querySelector(".taskcontainer");
  taskContainer.appendChild(task);

  projectInfoDiv.style.display = "none";

  inputProjectTitle.value = "";
}
