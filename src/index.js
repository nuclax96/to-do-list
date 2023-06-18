import "../src/css/style.css";
import { createModal, initalHtmlLoad } from "./modules/initial-load";
import fillHeader from "./modules/domHandler/header/populateHeader";
import {
  fillNav,
  fillProjectsContainer,
} from "./modules/domHandler/nav/populateNav";
import { fillMainContainer } from "./modules/domHandler/main/populateMain";
import { createProject } from "./modules/dataHandler/projectNavHandler";
import taskDataHandler, { createTask } from "./modules/dataHandler/task";
import createTaskContainer from "./modules/domHandler/main/addTaskModal";
import { eventsListener } from "./modules/eventListeners";

const projectsArr = [];
const taskArr = [];
const loadElements = function () {
  initalHtmlLoad();
  fillHeader();
  fillNav();
  fillMainContainer();
  fillProjectsContainer();
  createProject(projectsArr);
  createModal();
  createTaskContainer();

  // show tasks on inital load
  taskDataHandler.displayTask();
};

const initializeListeners = function () {
  eventsListener.taskListeners();
};

loadElements();
initializeListeners();

export { projectsArr, taskArr };
