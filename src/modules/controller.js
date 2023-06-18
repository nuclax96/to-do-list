import taskDataHandler from "./dataHandler/task";
import { deleteTaskUsingId } from "./domHandler/main/populateMain";
import taskModalFunctions from "./domHandler/main/taskModalFunctions";
import { eventsListener } from "./eventListeners";
import localStorageFunctions from "./helperFunctions/localStorage";
import { Task } from "./model/task";
const taskControllerFunctions = (() => {
  const openTaskModal = function () {
    taskModalFunctions.showModal();
  };
  const closeTaskModal = function () {
    taskModalFunctions.hideModal();
  };
  const taskSubmitController = function () {};

  const addTask = function () {
    const task_id = taskDataHandler.addTask();
    taskDataHandler.displayTask();
    eventsListener.deleteBtnListener();
  };
  const deleteTask = function (e) {
    const id = e.target.parentNode.dataset["id"];
    taskDataHandler.deleteTask("taskArr", id);
    deleteTaskUsingId(id);
  };
  const displayTasks = function () {};

  return {
    taskSubmitController,
    openTaskModal,
    closeTaskModal,
    addTask,
    deleteTask,
    displayTasks,
  };
})();

export { taskControllerFunctions };
