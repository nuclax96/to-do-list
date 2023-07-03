import {
  projectControllerFunction,
  taskControllerFunctions,
} from "./controller";
import taskDataHandler from "./dataHandler/task";

const taskEventsListener = (() => {
  const taskModalListeners = function () {
    const submitTaskBtn = document.querySelector(".btnSubmitTask");
    const closeTaskModalBtn = document.querySelector(".closeModal");
    submitTaskBtn.addEventListener("click", (e) => {
      e.preventDefault();
      taskControllerFunctions.addTask();
    });
    closeTaskModalBtn.addEventListener(
      "click",
      taskControllerFunctions.closeTaskModal
    );
  };
  const taskListeners = function () {
    const addTaskBtn = document.querySelector(".addTaskBtn");
    const deleteTasksBtn = document.querySelectorAll(".taskDeleteBtn");
    addTaskBtn.addEventListener("click", taskControllerFunctions.openTaskModal);

    deleteTasksBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        taskControllerFunctions.deleteTask(e);
      });
    });
  };
  const newTaskEventListener = function (id) {
    const newTaskDiv = document.querySelector(`[data-id=${id}]`);
    const imgDeleteBtn = newTaskDiv.querySelector(".taskDeleteBtn");
    imgDeleteBtn.addEventListener("click", (e) => {
      taskControllerFunctions.deleteTask(e);
    });
  };
  const deleteBtnListener = function () {
    const deleteTasksBtn = document.querySelectorAll(".taskDeleteBtn");

    deleteTasksBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        taskControllerFunctions.deleteTask(e);
      });
    });
  };
  return {
    taskListeners,
    newTaskEventListener,
    deleteBtnListener,
    taskModalListeners,
  };
})();

const projectEventListeners = (() => {
  const addProjectBtn = function () {
    const btnAddProject = document.querySelector(".addProjectBtn");
    btnAddProject.addEventListener(
      "click",
      projectControllerFunction.showProjectModal
    );
  };

  const projectModalListeners = function () {
    const submitProjectBtn = document.querySelector(".btnSubmitProject");
    const closeProjectModalBtn = document.querySelector(".closeModal");
    submitProjectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      projectControllerFunction.addProject();
    });
    closeProjectModalBtn.addEventListener(
      "click",
      projectControllerFunction.closeProjectModal
    );
  };

  return { addProjectBtn, projectModalListeners };
})();

export { taskEventsListener, projectEventListeners };
