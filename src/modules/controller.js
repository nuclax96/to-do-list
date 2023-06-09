import {
  changeCurrentProjectIdVar,
  changeCurrentTabVar,
  getCurrentProjectIdVar,
  getCurrentTabVar,
} from "../index.js";
import projectDataHandler from "./dataHandler/projects";
import taskDataHandler from "./dataHandler/task";
import createTaskContainer from "./domHandler/main/addTaskModal";

import {
  deleteTaskUsingId,
  fillTaskContainer,
} from "./domHandler/main/populateMain";
import taskModalFunctions from "./domHandler/main/taskModalFunctions";
import createProjectModal from "./domHandler/nav/addProjectModal";
import {
  addClassToNavLink,
  clearClassNavLink,
} from "./domHandler/nav/navLinksSelected.js";
import projectModalFunctions from "./domHandler/nav/projectModalFunctions";
import { projectEventListeners, taskEventsListener } from "./eventListeners";
import clearContainer from "./helperFunctions/clearContainer";
import localStorageFunctions from "./helperFunctions/localStorage";

const taskControllerFunctions = (() => {
  const openTaskModal = () => {
    clearContainer("modal");
    createTaskContainer();
    taskModalFunctions.showModal();
    taskEventsListener.taskModalListeners();
  };
  const closeTaskModal = () => {
    taskModalFunctions.hideModal();
  };
  const taskSubmitController = () => {};

  const addTask = () => {
    const userTask = taskDataHandler.addTask();

    // Form Validation Here , TO-DO

    // local storage
    localStorageFunctions.setLocalStorage("taskArr", userTask);
    // localStorageFunctions.getAllItems("taskArr");
    // Clear Input Fields
    taskModalFunctions.clearTaskModalValues();
    // close the modal
    taskModalFunctions.hideModal();
    taskDataHandler.displayTask();
    taskEventsListener.newTaskEventListener();
  };
  const deleteTask = (e) => {
    const { id } = e.target.parentNode.dataset;
    taskDataHandler.deleteTask("taskArr", id);
    deleteTaskUsingId(id);
  };

  const taskStatus = (e) => {
    const parentDivId = e.target.parentNode.dataset.id;
    let taskStatusFlag;
    const item = localStorageFunctions.getItemUsingId("taskArr", parentDivId);
    if (!item[0]._completed) {
      taskStatusFlag = true;
    } else {
      taskStatusFlag = false;
    }
    taskDataHandler.editTask("_completed", parentDivId, taskStatusFlag);
    e.target.parentNode.classList.toggle("taskCompleted");
    clearContainer("tasksContainer");

    if (getCurrentTabVar() != null) {
      const taskArr = taskDataHandler.getTask(getCurrentTabVar());
      fillTaskContainer(taskArr);
    } else {
      const taskArr = taskDataHandler.getTasksUsingProjectId(
        getCurrentProjectIdVar()
      );
      fillTaskContainer(taskArr);
    }

    // taskDataHandler.displayTask();
    taskEventsListener.taskListeners();
  };

  const showTaskNavLink = (e) => {
    const navLinkList = document.querySelectorAll(".linkNav");

    clearContainer("tasksContainer");
    const taskArr = taskDataHandler.getTask(e.target.textContent);
    fillTaskContainer(taskArr);

    clearClassNavLink(navLinkList, "selected");
    addClassToNavLink(e.target, "selected");
    taskEventsListener.taskListeners();
  };

  return {
    taskSubmitController,
    openTaskModal,
    closeTaskModal,
    addTask,
    deleteTask,
    showTaskNavLink,
    taskStatus,
  };
})();

const projectControllerFunction = (() => {
  const showProjectModal = () => {
    clearContainer("modal");
    createProjectModal();
    projectModalFunctions.showModal();
    projectEventListeners.projectModalListeners();
  };

  const addProject = () => {
    const projectData = projectDataHandler.addProject();
    // localStorageFunctions.clearLocalStorage("projectArr");
    localStorageFunctions.setLocalStorage("projectArr", projectData);
    // localStorageFunctions.getAllItems("projectArr");
    projectModalFunctions.clearProjectModalValues();
    // close the modal
    projectModalFunctions.hideModal();
    clearContainer("projectsContainer");
    projectDataHandler.displayProject();
    taskEventsListener.newTaskEventListener();
    projectEventListeners.projectNavListeners();
  };

  const closeProjectModal = () => {
    projectModalFunctions.hideModal();
  };

  const showProjectTasks = (e) => {
    clearContainer("tasksContainer");
    changeCurrentProjectIdVar(e.target.dataset.id);
    changeCurrentTabVar(null);
    const taskArr = taskDataHandler.getTasksUsingProjectId(e.target.dataset.id);
    fillTaskContainer(taskArr);

    const navLinkList = document.querySelectorAll(".linkNav");
    clearClassNavLink(navLinkList, "selected");
    addClassToNavLink(e.target, "selected");
    projectEventListeners.projectNavListeners();
  };

  const deleteProject = (id) => {
    projectDataHandler.deleteProject(id);
    clearContainer("projectsContainer");
    projectDataHandler.displayProject();
    projectEventListeners.projectNavListeners();
  };

  return {
    addProject,
    showProjectModal,
    closeProjectModal,
    showProjectTasks,
    deleteProject,
  };
})();
export { taskControllerFunctions, projectControllerFunction };
