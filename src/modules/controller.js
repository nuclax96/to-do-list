import projectDataHandler from "./dataHandler/projects";
import taskDataHandler from "./dataHandler/task";
import createTaskContainer from "./domHandler/main/addTaskModal";

import { deleteTaskUsingId } from "./domHandler/main/populateMain";
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
    taskEventsListener.deleteBtnListener();
  };
  const deleteTask = (e) => {
    const { id } = e.target.parentNode.dataset;
    taskDataHandler.deleteTask("taskArr", id);
    deleteTaskUsingId(id);
  };

  return {
    taskSubmitController,
    openTaskModal,
    closeTaskModal,
    addTask,
    deleteTask,
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
    taskEventsListener.deleteBtnListener();
  };

  const closeProjectModal = () => {
    projectModalFunctions.hideModal();
  };
  return { addProject, showProjectModal, closeProjectModal };
})();
export { taskControllerFunctions, projectControllerFunction };
