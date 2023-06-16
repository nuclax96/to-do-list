import iconEdit from "../../../assets/edit.svg";
import iconDelete from "../../../assets/delete.svg";
import {
  createDiv,
  createLink,
  createHeading,
  createParagraph,
  createImage,
  createButton,
} from "../../helperFunctions/createHtmlEl";

const createTaskDiv = function (
  taskName,
  taskCreatedDate,
  taskDueDate,
  taskCompleted
) {
  const taskContainer = createDiv("taskContainer");
  const name = createParagraph(taskName, "taskName");
  const dueDate = createParagraph(taskDueDate, "taskDueDate");
  const completed = createParagraph("false", "taskCompletedInd");
  const createDate = createParagraph(taskCreatedDate, "taskCreateDate");
  const editIcon = createImage(iconEdit, "addIcon");
  const deleteIcon = createImage(iconDelete, "addIcon");
  console.log(createDate);
  taskContainer.append(
    name,
    dueDate,
    completed,
    createDate,
    editIcon,
    deleteIcon
  );
  return taskContainer;
};

const fillTaskContainer = function (taskArr) {
  const tasksContatiner = document.querySelector(".tasksContainer");
  taskArr.forEach((item) => {
    const taskDiv = createTaskDiv(
      item.taskName,
      item.createdDate,
      item.dueDate,
      item.completed
    );
    tasksContatiner.append(taskDiv);
  });
};

const fillMainContainer = function () {
  const mainContainer = document.querySelector("main");
  const headingContainer = createDiv("mainHeadingContainer");
  const taskHeadingContainer = createDiv("taskHeadingContainer");
  const taskNameHeading = createParagraph("Name", "taskNameHeading");
  const taskDueDateHeading = createParagraph("Due Date", "taskNameHeading");
  const taskEditHeading = createParagraph("Edit", "editHeading");
  const taskDeleteHeading = createParagraph("Delete", "deleteHeading");
  const taskCreateDateHeading = createParagraph(
    "Create Date",
    "taskNameHeading"
  );
  const taskCompletedHeading = createParagraph("Completed", "taskNameHeading");
  taskHeadingContainer.append(
    taskNameHeading,
    taskCreateDateHeading,
    taskDueDateHeading,
    taskCompletedHeading,
    taskEditHeading,
    taskDeleteHeading
  );
  const taskContainer = createDiv("tasksContainer");
  const headingMain = createHeading("h2", "All Tasks", "mainHeading");
  const addTaskBtn = createButton("Add Task", "addTaskBtn");
  headingContainer.append(headingMain, addTaskBtn);

  mainContainer.append(headingContainer, taskHeadingContainer, taskContainer);
};

export { fillMainContainer, fillTaskContainer };
