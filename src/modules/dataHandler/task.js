import { fillTaskContainer } from "../domHandler/main/populateMain";
import Task from "../model/task";
import localStorageFunctions from "../helperFunctions/localStorage";
import taskModalFunctions from "../domHandler/main/taskModalFunctions";

const taskDataHandler = (() => {
  const addTask = () => {
    let priority = 5; // default priority set to 5 if not supplied
    // Get task input fields'
    const inputValues = taskModalFunctions.getAddTaskValues();
    priority = inputValues.priority ? inputValues.priority : priority;
    // Create task object
    const userTask = new Task(
      inputValues.taskName,
      inputValues.taskDueDate,
      inputValues.taskCreateDate,
      priority,
      false,
      inputValues.taskProjectId
    );
    return userTask;
  };

  const displayTask = () => {
    const tasksArr = localStorageFunctions.getAllItems("taskArr");
    fillTaskContainer(tasksArr);
  };

  const deleteTask = (itemName, id) => {
    localStorageFunctions.deleteItemUsingId(itemName, id);
  };

  const getTasksUsingProjectId = (projectId) => {
    const taskArr = localStorageFunctions.getAllItems("taskArr");
    return taskArr.filter((item) => item._projectId === projectId);
  };
  return { displayTask, deleteTask, addTask, getTasksUsingProjectId };
})();

export default taskDataHandler;
