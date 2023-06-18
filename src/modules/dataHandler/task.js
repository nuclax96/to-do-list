import getAddTaskValues from "../domHandler/main/taskModalFunctions";
import { fillTaskContainer } from "../domHandler/main/populateMain";
import { Task } from "../model/task";
import localStorageFunctions from "../helperFunctions/localStorage";
import taskModalFunctions from "../domHandler/main/taskModalFunctions";
export const taskDataHandler = (() => {
  const addTask = function () {
    let priority = 5; //default priority set to 5 if not supplied
    // Get task input fields'
    const inputValues = taskModalFunctions.getAddTaskValues();
    priority = inputValues.priority ? inputValues.priority : priority;
    // Create task object

    const userTask = new Task(
      inputValues.taskName,
      inputValues.taskDueDate,
      inputValues.taskCreateDate,
      priority,
      false
    );
    // Save to local storage

    localStorageFunctions.setLocalStorage("taskArr", userTask);
    localStorageFunctions.getAllItems("taskArr");
    //Clear Input Fields
    taskModalFunctions.clearTaskModalValues();
    //close the modal
    taskModalFunctions.hideModal();

    return userTask._id;
  };

  const displayTask = function () {
    const tasksArr = localStorageFunctions.getAllItems("taskArr");

    fillTaskContainer(tasksArr);
  };

  const deleteTask = function (itemName, id) {
    localStorageFunctions.deleteItemUsingId(itemName, id);
  };

  return { displayTask, deleteTask, addTask };
})();

export default taskDataHandler;
