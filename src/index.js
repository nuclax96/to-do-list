import "./css/style.css";
import { createModal, initalHtmlLoad } from "./modules/initial-load";
import fillHeader from "./modules/domHandler/header/populateHeader";
import {
  fillNav,
  fillProjectsContainer,
} from "./modules/domHandler/nav/populateNav";
import { fillMainContainer } from "./modules/domHandler/main/populateMain";
import taskDataHandler from "./modules/dataHandler/task";
import projectDataHandler from "./modules/dataHandler/projects";
import createTaskContainer from "./modules/domHandler/main/addTaskModal";
import {
  projectEventListeners,
  taskEventsListener,
} from "./modules/eventListeners";
// import createProjectModal from "./modules/domHandler/nav/addProjectModal";

const projectsArr = [];
const taskArr = [];
const loadElements = () => {
  initalHtmlLoad();
  fillHeader();
  fillNav();
  fillMainContainer();
  fillProjectsContainer();
  // createProject(projectsArr);
  createModal();
  // Task Modal
  createTaskContainer();

  // show tasks on inital load
  taskDataHandler.displayTask();
  projectDataHandler.displayProject();
};

const initializeListeners = () => {
  // Task Listeners
  taskEventsListener.taskListeners();
  taskEventsListener.taskModalListeners();
  //

  // Project Listeners
  projectEventListeners.addProjectBtn();
  projectEventListeners.projectNavListeners();

  //
};

loadElements();
initializeListeners();

export { projectsArr, taskArr };
