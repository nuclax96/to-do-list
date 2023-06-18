import { taskControllerFunctions } from "./controller";
import taskDataHandler from "./dataHandler/task";

const eventsListener = (() => {
  const taskListeners = function () {
    const addTaskBtn = document.querySelector(".addTaskBtn");
    const submitTaskBtn = document.querySelector(".btnSubmitTask");
    const closeTaskModalBtn = document.querySelector(".closeModal");
    const deleteTasksBtn = document.querySelectorAll(".taskDeleteBtn");
    addTaskBtn.addEventListener("click", taskControllerFunctions.openTaskModal);
    closeTaskModalBtn.addEventListener(
      "click",
      taskControllerFunctions.closeTaskModal
    );
    submitTaskBtn.addEventListener("click", taskControllerFunctions.addTask);

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
  return { taskListeners, newTaskEventListener, deleteBtnListener };
})();

export { eventsListener };
