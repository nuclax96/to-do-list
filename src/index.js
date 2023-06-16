import "../src/css/style.css";
import { createModal, initalHtmlLoad } from "./modules/initial-load";
import fillHeader from "./modules/domHandler/header/populateHeader";
import {
  fillNav,
  fillProjectsContainer,
} from "./modules/domHandler/nav/populateNav";
import { fillMainContainer } from "./modules/domHandler/main/populateMain";
import { createProject } from "./modules/dataHandler/projectNavHandler";
import { createTask } from "./modules/dataHandler/taskHandler";
import createTaskContainer from "./modules/domHandler/main/addTaskModal";

const projectsArr = [];
const taskArr = [];

const loadElements = function () {
  initalHtmlLoad();
  fillHeader();
  fillNav();
  fillMainContainer();
  fillProjectsContainer();
  createProject(projectsArr);
  createTask();
};

const initializeListeners = function () {
  createModal();
  createTaskContainer();
};

loadElements();
initializeListeners();

export { projectsArr, taskArr };
