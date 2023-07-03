import projectDataHander from "./dataHandler/projects";
import taskDataHandler from "./dataHandler/task";

import { deleteTaskUsingId } from "./domHandler/main/populateMain";
import taskModalFunctions from "./domHandler/main/taskModalFunctions";
import createProjectModal from "./domHandler/nav/addProjectModal";
import projectModalFunctions from "./domHandler/nav/projectModalFunctions";
import { projectEventListeners, taskEventsListener } from "./eventListeners";
import clearContainer from "./helperFunctions/clearContainer";
import localStorageFunctions from "./helperFunctions/localStorage";
const taskControllerFunctions = (() => {
  // const createModal = function () {
  //   taskModalFunctions.showModal();
  // };

  const openTaskModal = function () {
    taskModalFunctions.showModal();
  };
  const closeTaskModal = function () {
    taskModalFunctions.hideModal();
  };
  const taskSubmitController = function () {};

  const addTask = function () {
    const userTask = taskDataHandler.addTask();

    //Form Validation Here , TO-DO

    //local storage
    localStorageFunctions.setLocalStorage("taskArr", userTask);
    localStorageFunctions.getAllItems("taskArr");
    //Clear Input Fields
    taskModalFunctions.clearTaskModalValues();
    //close the modal
    taskModalFunctions.hideModal();
    taskDataHandler.displayTask();
    taskEventsListener.deleteBtnListener();
  };
  const deleteTask = function (e) {
    const id = e.target.parentNode.dataset["id"];
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
  const showProjectModal = function () {
    clearContainer("modal");
    createProjectModal();
    projectModalFunctions.showModal();
    projectEventListeners.projectModalListeners();
  };

  const addProject = function () {
    projectDataHander.addProject();
  };

  const closeProjectModal = function () {
    projectModalFunctions.hideModal();
  };
  return { addProject, showProjectModal, closeProjectModal };
})();
export { taskControllerFunctions, projectControllerFunction };
