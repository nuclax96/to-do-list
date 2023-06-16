import {
  createButton,
  createDiv,
  createHeading,
  createInput,
  createLabel,
  createParagraph,
} from "../../helperFunctions/createHtmlEl";

const createTaskContainer = function () {
  const modal = document.querySelector(".modal");
  const taskContainer = createDiv("taskModalContainer");

  const modalContainer = createDiv("modalContainer");
  const taskHeadingContainer = createDiv("taskModalHeadingContainer");
  const taskModalHeading = createParagraph("Add Task", "modalHeading");
  taskHeadingContainer.append(taskModalHeading);
  const taskNameInput = createInput("taskName", "taskName", "text");
  const taskNameLabel = createLabel("Task Name", "taskName");
  const taskCreateDateInput = createInput(
    "taskCreateDate",
    "taskCreateDate",
    "date"
  );
  const taskCreateDateLabel = createLabel("Create Date", "taskCreateDate");

  const taskDueDateInput = createInput("taskDueDate", "taskDueDate", "date");
  const taskDueDateLabel = createLabel("Due Date", "taskDueDate");

  const submitBtn = createButton("Submit", "btnSubmitTask");
  modalContainer.append(taskHeadingContainer, taskContainer);
  taskContainer.append(
    taskNameLabel,
    taskNameInput,
    taskCreateDateLabel,
    taskCreateDateInput,
    taskDueDateLabel,
    taskDueDateInput,
    submitBtn
  );
  modal.append(modalContainer);
};

export default createTaskContainer;
