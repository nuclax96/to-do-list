import projectDataHandler from "./dataHandler/projects";
import taskDataHandler from "./dataHandler/task";
import createTaskContainer from "./domHandler/main/addTaskModal";

import {
  deleteTaskUsingId,
  fillMainContainer,
  fillTaskContainer,
} from "./domHandler/main/populateMain";
import taskModalFunctions from "./domHandler/main/taskModalFunctions";
import createProjectModal from "./domHandler/nav/addProjectModal";
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
    console.log("Hello");
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
    console.log(e.target.parentNode);
    e.target.parentNode.classList.toggle("taskCompleted");
  };

  const showTaskNavLink = (e) => {
    clearContainer("tasksContainer");
    const taskArr = taskDataHandler.getTask(e.target.textContent);
    fillTaskContainer(taskArr);
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
    localStorageFunctions.setLocalStorage("projectArr", projectData);
    // localStorageFunctions.getAllItems("projectArr");
    projectModalFunctions.clearProjectModalValues();
    // close the modal
    projectModalFunctions.hideModal();
    projectDataHandler.displayProject();
    taskEventsListener.newTaskEventListener();
  };

  const closeProjectModal = () => {
    projectModalFunctions.hideModal();
  };

  const showProjectTasks = (e) => {
    clearContainer("tasksContainer");
    const taskArr = taskDataHandler.getTasksUsingProjectId(e.target.dataset.id);
    fillTaskContainer(taskArr);
  };

  return { addProject, showProjectModal, closeProjectModal, showProjectTasks };
})();
export { taskControllerFunctions, projectControllerFunction };
