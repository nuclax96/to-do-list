import iconEdit from "../../../assets/edit.svg";
import iconDelete from "../../../assets/delete.svg";
import {
  createDiv,
  createHeading,
  createParagraph,
  createImage,
  createButton,
} from "../../helperFunctions/createHtmlEl";

const createTaskDiv = (
  taskName,
  taskCreatedDate,
  taskDueDate,
  taskCompleted
) => {
  const taskContainer = createDiv("taskContainer");
  const name = createParagraph(taskName, "taskName");
  const dueDate = createParagraph(taskDueDate, "taskDueDate");
  const createDate = createParagraph(taskCreatedDate, "taskCreateDate");
  const completed = createParagraph(taskCompleted, "taskCompletedInd");
  const editIcon = createImage(iconEdit, "addIcon");
  const deleteIcon = createImage(iconDelete, "addIcon");
  deleteIcon.classList.add("taskDeleteBtn");

  taskContainer.append(
    name,
    createDate,
    dueDate,
    completed,
    editIcon,
    deleteIcon
  );
  return taskContainer;
};

const fillTaskContainer = (taskArr) => {
  const tasksContatiner = document.querySelector(".tasksContainer");
  tasksContatiner.textContent = "";
  if (!taskArr) return;
  taskArr.forEach((item) => {
    const taskDiv = createTaskDiv(
      item._title,
      item._createDate,
      item._dueDate,
      item._completed
    );
    taskDiv.dataset.id = item._id;
    tasksContatiner.append(taskDiv);
  });
};

const deleteTaskUsingId = (id) => {
  const taskDiv = document.querySelector(`[data-id=${id}]`);
  const taskContainer = document.querySelector(".tasksContainer");
  taskContainer.removeChild(taskDiv);
};

const fillMainContainer = () => {
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

export { fillMainContainer, fillTaskContainer, deleteTaskUsingId };
