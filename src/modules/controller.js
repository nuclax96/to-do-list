import taskDataHandler from "./dataHandler/task";
import { deleteTaskUsingId } from "./domHandler/main/populateMain";
import taskModalFunctions from "./domHandler/main/taskModalFunctions";
import { eventsListener } from "./eventListeners";
import localStorageFunctions from "./helperFunctions/localStorage";
const taskControllerFunctions = (() => {
  const openTaskModal = function () {
    taskModalFunctions.showModal();
  };
  const closeTaskModal = function () {
    taskModalFunctions.hideModal();
  };
  const taskSubmitController = function () {};

  const addTask = function () {
    const userTask = taskDataHandler.addTask();

    //local storage
    localStorageFunctions.setLocalStorage("taskArr", userTask);
    localStorageFunctions.getAllItems("taskArr");
    //Clear Input Fields
    taskModalFunctions.clearTaskModalValues();
    //close the modal
    taskModalFunctions.hideModal();
    taskDataHandler.displayTask();
    eventsListener.deleteBtnListener();
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

export { taskControllerFunctions };
